import type { IAuthResponse } from "../interfaces/IAuthResponse";
import type { ILoginCredentials } from "../interfaces/IloginCredentials";
import api from "../services/Login/api";
import { userApi } from "./userApi";


export class LoginApi {
  static async login(credentials: ILoginCredentials): Promise<IAuthResponse> {
    try {
      const authToken = btoa(`${credentials.username}:${credentials.password}`);
      
      const response = await api.post<IAuthResponse>(
        "/auth/login",
        {},
        {
          headers: {
            "Authorization": `Basic ${authToken}`
          }
        }
      );

      const currentUser = userApi.getUser();

      if (response.data.token) {
        localStorage.setItem("currentUserId", ((await currentUser).id).toString())
        localStorage.setItem("authToken", response.data.token);
        api.defaults.headers.common["X-Auth-Token"] = response.data.token;
      }

      return response.data;
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      throw error;
    }
  }
}
