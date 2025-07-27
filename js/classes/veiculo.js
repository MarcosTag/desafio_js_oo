  export class Veiculo {
  constructor(nome, quantidadeRodas, tipoMotor) {
    this.nome = nome;
    this.quantidadeRodas = quantidadeRodas;
    this.tipoMotor = tipoMotor;
  }

  /**
   * Método para acelerar o veículo.
   * Dependendo do tipo de motor, uma mensagem diferente será exibida.
   */
  acelerar( textHtml = false ) {

    let msg_1 = this.tipoMotor == 1 ? "Acelerando com motor a combustão!" : "Acelerando com motor elétrico!";
    let msg_2 = `Acelerando ${this.nome} com ${this.quantidadeRodas} rodas!`;

    // Se textHtml for passado como true, as mensagens serão formatadas com HTML.
    if (textHtml) {
      msg_1 = this.tipoMotor == 1 ? "Acelerando com motor a <strong>combustão</strong>!" : "Acelerando com motor <strong>elétrico</strong>!";
      msg_2 = `Acelerando <strong>${this.nome}</strong> com <strong>${this.quantidadeRodas}</strong> rodas!`;
    }

    const mensagem = {
      'msg_1': msg_1,
      'msg_2': msg_2
    }

    return mensagem;
  }
}   