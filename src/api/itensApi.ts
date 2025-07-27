import type { Itens } from "../interfaces/Iitens";
import api from "../services/Itens/api";

export class itensApi {

  static async getItens(): Promise<Itens[]> {
    const response = await api.get<Itens[]>("/itens/obter-todos");
    return response.data;
  }
  
  static async cadastrarItem(formData: FormData): Promise<Itens> {
    return api.post("/itens/cadastrar", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  static async getItensTroca(): Promise<Itens[]> {
    const response = await api.get<Itens[]>("/itens/tipo/TROCA");
    return response.data;
  }

  static async getItensDoacao(): Promise<Itens[]> {
    const response = await api.get<Itens[]>("/itens/tipo/DOACAO");
    return response.data;
  }

  static async getPorCategoria(categoria: string): Promise<Itens[]> {
      const response = await api.get<Itens[]>(`/itens/categoria/${categoria}`);
      return response.data;
    }
}
