import type { Itens } from "../interfaces/Iitens";
import api from "../services/Itens/api";

export class itensApi {

  static async getItens(): Promise<Itens[]> {
    const response = await api.get<Itens[]>("/itens/obter-todos");
    return response.data;
  }
  
    static async cadastrarItem(itemFormData: FormData): Promise<Itens> {
    const response = await api.post<Itens>("/itens/cadastrar", itemFormData);
    return response.data;
  }

  static async getPorCategoria(categoria: string): Promise<Itens[]> {
      const response = await api.get<Itens[]>(`/itens/categoria/${categoria}`);
      return response.data;
    }
}
