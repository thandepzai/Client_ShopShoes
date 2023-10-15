import { NextApiRequest, NextApiResponse } from "next";
import { METHOD, STATUS_CODE } from "@/src/const/app-const";
import { ResponseProps } from "@/network/services/api-handler";
import { AuthToken } from "@/middleware/server/auth";
import { prisma } from "@/services/prisma";
import { Classification, Product, Sellstatistic } from "@prisma/client";

export interface StatisticProps extends Sellstatistic {
  Classification: Classification | null;
  Product: Product | null;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseProps<StatisticProps[] | null>>
) {
  if (req.method !== METHOD.GET) {
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
  try {
    const result = await prisma.sellstatistic.findMany({
      include: {
        Classification: true,
        Product: true,
      },
      orderBy: { productId: "desc" },
    });

    return res.status(STATUS_CODE.OK).json({
      code: STATUS_CODE.OK,
      data: result,
      msg: "ok",
    });
  } catch (error) {
    return res
      .status(STATUS_CODE.INTERNAL)
      .json({ code: STATUS_CODE.INTERNAL, data: null, msg: "internal" });
  }
}