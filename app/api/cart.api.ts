import { ResponseProps } from "@/network/services/api-handler";
import { METHOD } from "../../src/const/app-const";
import { CartDataProps } from "@/src/contexts/CartContext";

export interface AddCartDataProps {
  userId: string;
  classificationId: string;
  productId: string;
  image: string;
  quantity: number;
}
async function AddCartItemApi(
  data: AddCartDataProps,
  token: string
): Promise<ResponseProps<string | null>> {
  const url = `/api/cart/add`;
  const response = await fetch(url, {
    method: METHOD.POST,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

export interface UpdateCartItemProps {
  id: string;
  quantity: number;
}
async function UpdateCartItemApi(
  data: UpdateCartItemProps,
  token: string
): Promise<ResponseProps<null>> {
  const url = `/api/cart/update`;
  const response = await fetch(url, {
    method: METHOD.PATCH,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": token,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

async function DeleteCartItemApi(
  id: string,
  token: string
): Promise<ResponseProps<null>> {
  const url = `/api/cart/delete?id=${id}`;
  const response = await fetch(url, {
    method: METHOD.DELETE,
    headers: {
      "x-access-token": token,
    },
  });
  const result = await response.json();
  return result;
}

async function GetMyCartApi(
  token: string
): Promise<ResponseProps<CartDataProps[] | null>> {
  const url = `/api/cart/mycart`;
  const response = await fetch(url, {
    method: METHOD.GET,
    headers: {
      "x-access-token": token,
    },
  });
  const result = await response.json();
  return result;
}

export { AddCartItemApi, UpdateCartItemApi, DeleteCartItemApi, GetMyCartApi };