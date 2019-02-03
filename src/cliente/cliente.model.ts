export class Cliente {

  nome: string;
  cpf: string;
  email: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
  plano: Plano;
  procedimento: Procedimento;
  constructor() {
  }
}

export class Plano {
  id: number;
  nome: string;
  constructor() {
  }
}

export class Procedimento {
  id: number;
  nome: string;
  constructor() {
  }
}

