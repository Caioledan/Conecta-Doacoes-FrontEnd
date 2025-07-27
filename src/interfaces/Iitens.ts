export interface Usuario {
  id: number;
  email: string;
  nome: string;
  password: string;
  telefone: string;
  role: string;
}

export interface DataItem {
  id: number;
  nomeArquivo: string;
  tipoArquivo: string;
  imagemItem: string;
}

export interface Itens {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  condicao: string;
  localizacao: string;
  usuario: Usuario;
  dataItem: DataItem;
}

export interface ItensWithImageUrl extends Itens {
  imageUrl: string;
}
