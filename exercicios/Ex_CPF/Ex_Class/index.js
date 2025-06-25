class ValidaCPF {
  constructor(cpfEnviado) {
    Object.defineProperty(this, "cpfLimpo", {
      enumerable: true,
      get: function () {
        return cpfEnviado.replace(/\D+/g, "");
      },
    });
  }

  valida() {
    if (typeof this.cpfLimpo !== "string") return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;

    const cpfParcial = this.criaCpfParcial();
    return this.criaDigitosFinais(cpfParcial);
  }

  isSequencia() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
  }

  criaCpfParcial() {
    return this.cpfLimpo.slice(0, -2);
  }

  criaDigitosFinais(cpfParcial) {
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);

    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
  }

  criaDigito(cpfParcial) {
    let total = 0;
    let reverso = cpfParcial.length + 1;

    for (let stringNum of cpfParcial) {
      total += reverso * Number(stringNum);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : "0";
  }
}

const cpf = new ValidaCPF("054.585.460-15");

if (cpf.valida()) {
  console.log("CPF válido.");
} else {
  console.log("CPF inválido");
}
