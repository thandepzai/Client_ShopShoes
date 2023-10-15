import { NextApiRequest, NextApiResponse } from "next";
import { METHOD, ORDER_STATUS, STATUS_CODE } from "@/src/const/app-const";
import { ResponseProps } from "@/network/services/api-handler";
import { AuthToken } from "@/middleware/server/auth";
import { prisma } from "@/services/prisma";
import { CartDataProps } from "@/src/contexts/CartContext";

export interface adminCreateOrderProps {
  productId: string;
  classificationId: string;
  price: number;
  quantity: number;
  note: string;
  phone?: string;
  email?: string;
  shipCode?: string;
}

type ItemProps = Partial<CartDataProps>;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProps<string | null>>
) {
  if (req.method !== METHOD.POST) {
    return res.status(STATUS_CODE.INVALID_METHOD).json({
      code: STATUS_CODE.INVALID_METHOD,
      data: null,
      msg: "Invalid method",
    });
  }
  const tokenValid = AuthToken(req, res, "ADMIN");
  if (!tokenValid.pass) {
    return;
  }

  const {
    classificationId,
    productId,
    note,
    price,
    quantity,
    email,
    shipCode,
    phone,
  } = req.body as adminCreateOrderProps;
  try {
    const product = await prisma.product.findUnique({
      where: { id: productId },
      include: { classifications: true },
    });

    if (product !== null) {
      const classify = product.classifications.find(
        (cls) => cls.id === classificationId
      );

      if (classify !== undefined && classify.quantity >= quantity) {
        const replacePrice = product.classifications.map((cls) => {
          if (cls.id === classificationId) {
            return { ...cls, price };
          }
          return cls;
        });
        const cloneProduct = { ...product, classifications: replacePrice };

        const items: ItemProps[] = [
          {
            classificationId,
            image: classify.image,
            Product: cloneProduct,
            productId,
            quantity,
          },
        ];
        const order = await prisma.order.create({
          data: {
            items: JSON.stringify(items),
            paymentMethod: "Nền tảng khác",
            total: classify.price * quantity,
            userId: tokenValid.data.id,
            note,
            email,
            shipCode,
            phone,
            status: ORDER_STATUS.DONE,
          },
        });

        await prisma.classification.update({
          where: { id: classificationId },
          data: {
            quantity: {
              decrement: quantity,
            },
          },
        });
        if (classify.warranty > 0) {
          const dueDate = new Date(
            new Date().getTime() + classify.warranty * 24 * 60 * 60 * 1000
          );
          await prisma.warranty.create({
            data: {
              phone,
              email,
              classificationId,
              orderId: order.id,
              dueAt: dueDate.toISOString(),
              productId,
              userId: order.userId,
            },
          });
        }

        const statistic = await prisma.sellstatistic.findFirst({
          where: { classificationId },
        });
        if (statistic !== null) {
          const newQuantity = statistic.sellQuantity + quantity;
          const newAverage =
            (statistic.sellAveragePrice * statistic.sellQuantity +
              quantity * price) /
            newQuantity;
          await prisma.sellstatistic.update({
            where: { id: statistic.id },
            data: {
              sellQuantity: newQuantity,
              sellAveragePrice: newAverage,
            },
          });
        }
      }

      return res
        .status(STATUS_CODE.CREATED)
        .json({ code: STATUS_CODE.CREATED, data: null, msg: "CREATED" });
    } else {
      return res
        .status(STATUS_CODE.FAILED)
        .json({ code: STATUS_CODE.FAILED, data: null, msg: "failed" });
    }
  } catch (error) {
    return res
      .status(STATUS_CODE.INTERNAL)
      .json({ code: STATUS_CODE.INTERNAL, data: null, msg: "internal" });
  }
}