import type { Iuser } from "../interfaces/Iuser";
import api from "../services/User/api";

export class userApi {

  static async getUsers(): Promise<Iuser[]> {
    const response = await api.get<Iuser[]>("/usuarios");
    return response.data;
  }

  static async getUser(): Promise<Iuser> {
    const user = await api.get<Iuser>("usuarios/obter-usuario-logado");
    return user.data;
  }
}
