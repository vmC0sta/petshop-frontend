const nome = {
  nome: document.getElementById("nome"),
  validatorNomeMessage: document.getElementById("validatorNome"),
  ok: false,
};

const email = {
  email: document.getElementById("email"),
  validatorEmailMessage: document.getElementById("validatorEmail"),
  ok: false,
};

const telefone = {
  telefone: document.getElementById("telefone"),
  validatorTelefoneMessage: document.getElementById("validatorTelefone"),
  ok: false,
};

const senha = {
  senha: document.getElementById("senha"),
  validatorSenhaMessage: document.getElementById("validatorSenha"),
  ok: false,
};

const senhaVerificada = {
  senhaVerificada: document.getElementById("senhaVerificada"),
  validatorSenhaVerificadaMessage: document.getElementById(
    "validatorSenhaVerificada"
  ),
  ok: false,
};

const inputsRequired = {
  input:  document.getElementsByTagName("input"),
  ok: false
};

const btnConfirmar = document.getElementById("btn-confirmar");

function validaNome(nome) {
  return /^[A-ZÀ-Ÿ][A-zÀ-ÿ']+\s([A-zÀ-ÿ']\s?)*[A-ZÀ-Ÿ][A-zÀ-ÿ']+$/.test(nome);
}

function validaEmail(email) {
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
}

function validaTelefone(telefone) {
  return /^\((?:[14689][1-9]|2[12478]|3[1234578]|5[1345]|7[134579])\) (?:[2-8]|9[0-9])[0-9]{3}\-[0-9]{4}$/.test(
    telefone
  );
}

function validaSenha(senha) {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])(?!.*\s).{8,}$/.test(
    senha
  );
}

const mascaraTelefone = (valor) => {
  valor = valor.replace(/\D/g, "");
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
  telefone.telefone.value = valor;
};

telefone.telefone.addEventListener("keyup", () => {
  mascaraTelefone(telefone.telefone.value);
  if (!validaTelefone(telefone.telefone.value)) {
    telefone.validatorTelefoneMessage.innerHTML = "Número de telefone inválido";
    telefone.ok = false;
  } else {
    telefone.validatorTelefoneMessage.innerHTML = "";
    telefone.ok = true;
  }
});

nome.nome.addEventListener("keyup", () => {
  if (!validaNome(nome.nome.value)) {
    nome.validatorNomeMessage.innerHTML = "Digite seu nome completo.";
    nome.ok = false;
  } else {
    nome.validatorNomeMessage.innerHTML = "";
    nome.ok = true;
  }
});

email.email.addEventListener("keyup", () => {
  if (!validaEmail(email.email.value)) {
    email.validatorEmailMessage.innerHTML = "E-mail inválido.";
    email.ok = false;
  } else {
    email.validatorEmailMessage.innerHTML = "";
    email.ok = true;
  }
});

senha.senha.addEventListener("keyup", () => {
  if (!validaSenha(senha.senha.value)) {
    senha.validatorSenhaMessage.innerHTML =
      "A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, um número e um símbolo.";
    senha.ok = false;
  } else {
    senha.validatorSenhaMessage.innerHTML = "";
    senha.ok = true;
  }
});

senhaVerificada.senhaVerificada.addEventListener("keyup", () => {
  if (senhaVerificada.senhaVerificada.value != senha.senha.value) {
    senhaVerificada.validatorSenhaVerificadaMessage.innerHTML =
      "A senha informada não é compatível.";
    senhaVerificada.ok = false;
  } else {
    senhaVerificada.validatorSenhaVerificadaMessage.innerHTML = "";
    senhaVerificada.ok = true;
  }
});

window.addEventListener("change", () => {

  if (nome.ok && email.ok && telefone.ok && senha.ok && senhaVerificada.ok) {
    btnConfirmar.classList.remove("button-secundary-rejected");
    btnConfirmar.classList.add("button-secundary-accepted");
    btnConfirmar.disabled = false;
  } else {
    btnConfirmar.classList.remove("button-secundary-accepted");
    btnConfirmar.classList.add("button-secundary-rejected");
    btnConfirmar.disabled = true;
  }
});
