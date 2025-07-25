export class Veiculo {
  constructor(nome, quantidadeRodas, tipoMotor) {
    this.nome = nome;
    this.quantidadeRodas = quantidadeRodas;
    this.tipoMotor = tipoMotor;
  }

  acelerar() {

    let msg_1 = this.tipoMotor == 1 ? "Acelerando com motor a combustão!" : "Acelerando com motor elétrico!";
    let msg_2 = `Acelerando ${this.nome} com ${this.quantidadeRodas} rodas!`;

    console.log(msg_1);
    console.log(msg_2);

  }
}   