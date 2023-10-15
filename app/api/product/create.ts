import { NextApiRequest, NextApiResponse } from "next";
import { Classification } from "@prisma/client";
import { METHOD, STATUS_CODE } from "@/src/const/app-const";
import { ResponseProps } from "@/network/services/api-handler";
import { AuthToken } from "@/middleware/server/auth";
import { prisma } from "@/services/prisma";
import { removeMark } from "@/ultis/dataConvert";

interface BodyProps {
  name: string;
  status: string;
  category: string;
  images: string;
  description: string;
  classifications: Classification[];
}
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

  const { name, category, status, images, description, classifications } =
    req.body as BodyProps;
  try {
    const result = await prisma.product.create({
      data: {
        name,
        status,
        category,
        images: images.split(","),
        description,
        classifications: {
          create: classifications.map((item) => item),
        },
      },
    });

    return res.status(STATUS_CODE.CREATED).json({
      code: STATUS_CODE.CREATED,
      data: `${removeMark(result.name)}pid=${result.id}`,
      msg: "Tạo sản phẩm thành công",
    });
  } catch (error) {
    return res
      .status(STATUS_CODE.INTERNAL)
      .json({ code: STATUS_CODE.INTERNAL, data: null, msg: "internal" });
  }
}