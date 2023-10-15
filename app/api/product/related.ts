import { NextApiRequest, NextApiResponse } from "next";
import { METHOD, STATUS_CODE } from "@/src/const/app-const";
import { ResponseProps } from "@/network/services/api-handler";

import { prisma } from "@/services/prisma";
import { ProductWithClassifyProps } from "@/src/contexts/CartContext";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProps<ProductWithClassifyProps[] | null>>
) {
  if (req.method !== METHOD.GET) {
    return res.status(STATUS_CODE.INVALID_METHOD).json({
      code: STATUS_CODE.INVALID_METHOD,
      data: null,
      msg: "Invalid method",
    });
  }

  const { id } = req.query;
  try {
    const product = await prisma.product.findUnique({
      where: { id: id?.toString() },
    });

    const products = await prisma.product.findMany({
      where: { id: { not: id?.toString() }, category: product?.category },
      include: {
        classifications: true,
      },
      take: 4,
      orderBy: { id: "asc" }, // sắp xếp sản phẩm theo id tăng dần
    });

    return res.status(STATUS_CODE.OK).json({
      code: STATUS_CODE.OK,
      data: products,
      msg: "ok",
    });
  } catch (error) {
    return res
      .status(STATUS_CODE.INTERNAL)
      .json({ code: STATUS_CODE.INTERNAL, data: null, msg: "internal" });
  }
}