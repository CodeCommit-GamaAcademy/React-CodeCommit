export interface UserResponse {
    conta: {
      descricao: string,
      id: number,
      numero: string,
      saldo: number,
      tipo: "CB"
    },
    contaCredito: {
      descricao: string,
      id: number,
      numero: string,
      saldo: number,
      tipo: "CB"
    },
    dataFim: Date,
    dataInicio: Date,
    token: string,
    usuario: {
      cpf: string,
      id: number,
      login: string,
      nome: string,
      redefinirSenha: boolean,
      senha: string,
      senhaTemporaria: string
    }
}

export interface Conta {
  id: number,
  lancamentos: Lancamento[],
  saldo: number,
}

export interface Lancamento {
  conta: number,
  data: string,
  descricao: string,
  id: number,
  planoConta: Plano,
  tipo: string,
  valor: number,
}

export interface Plano {
  descricao: string,
  id: number,
  login: string,
  padrao: boolean,
  tipoMovimento: string,
}