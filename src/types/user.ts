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