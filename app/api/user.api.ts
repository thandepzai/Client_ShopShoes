import { ResponseProps } from "@/network/services/api-handler";
import { METHOD } from "../../src/const/app-const";
import { User } from "@prisma/client";

export interface LoginApiProps {
  email: string;
  password: string;
}

interface loginResult {
  accessToken: string;
}

export interface RegisAccountApiProps {
  name: string;
  password: string;
  email: string;
}
async function RegisAccountApi(
  data: RegisAccountApiProps
): Promise<ResponseProps<null>> {
  const url = `/api/user/create`;
  const response = await fetch(url, {
    method: METHOD.POST,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

async function LoginWithAccountApi(
  data: LoginApiProps
): Promise<ResponseProps<loginResult | null>> {
  const url = `/api/user/login`;
  const response = await fetch(url, {
    method: METHOD.POST,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

async function AuthenApi(token: string): Promise<ResponseProps<User | null>> {
  const url = `/api/user/auth`;
  const response = await fetch(url, {
    method: METHOD.GET,
    headers: {
      "x-access-token": token,
    },
  });
  const result = await response.json();
  return result;
}

interface ResetPasswordPayloadProps {
  token: string;
  newPassword: string;
}

async function ResetPasswordApi(
  data: ResetPasswordPayloadProps
): Promise<ResponseProps<loginResult | null>> {
  const url = `/api/user/changePassword`;
  const response = await fetch(url, {
    method: METHOD.POST,
    headers: {
      "Content-Type": "application/json",
      "x-access-token": data.token,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
}

async function SendResetMailApi(
  email: string
): Promise<ResponseProps<loginResult | null>> {
  const url = `/api/user/sendResetMail`;
  const response = await fetch(url, {
    method: METHOD.POST,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });
  const result = await response.json();
  return result;
}

export {
  RegisAccountApi,
  LoginWithAccountApi,
  AuthenApi,
  ResetPasswordApi,
  SendResetMailApi,
};