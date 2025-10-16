document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formEndereco");
  const cepInput = document.getElementById("cep");
  const logradouroInput = document.getElementById("logradouro");
  const numeroInput = document.getElementById("numero");
  const ufInput = document.getElementById("uf");
  const complementoInput = document.getElementById("complemento");

  cepInput.addEventListener("input", function (e) {
    let valor = e.target.value;

    valor = valor.replace(/\D/g, "");

    if (valor.length > 5) {
      valor = valor.replace(/^(\d{5})(\d)/, "$1-$2");
    }

    e.target.value = valor;
  });

  ufInput.addEventListener("input", function (e) {
    e.target.value = e.target.value.toUpperCase();
  });

  numeroInput.addEventListener("input", function (e) {
    e.target.value = e.target.value.replace(/\D/g, "");
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const cep = cepInput.value.trim();
    const logradouro = logradouroInput.value.trim();
    const numero = numeroInput.value.trim();
    const uf = ufInput.value.trim();
    const complemento = complementoInput.value.trim();

    const regexCep = /^(\d{5})-(\d{3})$/;

    if (!cep) {
      alert("❌ Erro: O campo CEP é obrigatório!");
      cepInput.focus();
      return;
    }

    if (!regexCep.test(cep)) {
      alert("❌ Erro: CEP inválido! Use o formato 00000-000");
      cepInput.focus();
      return;
    }

    if (!logradouro) {
      alert("❌ Erro: O campo Logradouro é obrigatório!");
      logradouroInput.focus();
      return;
    }

    if (logradouro.length < 5) {
      alert("❌ Erro: O Logradouro deve conter no mínimo 5 caracteres!");
      logradouroInput.focus();
      return;
    }

    if (!numero) {
      alert("❌ Erro: O campo Número é obrigatório!");
      numeroInput.focus();
      return;
    }

    const regexNumero = /^\d+$/;
    if (!regexNumero.test(numero)) {
      alert("❌ Erro: O campo Número deve conter apenas dígitos numéricos!");
      numeroInput.focus();
      return;
    }

    if (!uf) {
      alert("❌ Erro: O campo UF é obrigatório!");
      ufInput.focus();
      return;
    }

    const regexUf = /^[A-Z]{2}$/;
    if (!regexUf.test(uf)) {
      alert(
        "❌ Erro: UF inválida! Digite exatamente 2 letras maiúsculas (ex: SP, RJ, MG)"
      );
      ufInput.focus();
      return;
    }

    alert("✅ Endereço cadastrado com sucesso!");

    form.reset();

    console.log("=== Endereço Cadastrado ===");
    console.log("CEP:", cep);
    console.log("Logradouro:", logradouro);
    console.log("Número:", numero);
    console.log("UF:", uf);
    console.log("Complemento:", complemento || "(não informado)");
    console.log("===========================");
  });
});
