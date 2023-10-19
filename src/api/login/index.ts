import request from "@/util/http";
import type { Login } from "./type";

enum API {
    LOGIN_URL = '/user/login'
}

// 登录接口封装
export const loginApi = (data:Login)=>request.post(API.LOGIN_URL,data)