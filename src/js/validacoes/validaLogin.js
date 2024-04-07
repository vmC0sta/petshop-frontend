const email = {
  email: document.getElementById("email"),
  validatorEmailMessage: document.getElementById("validatorEmail"),
  ok: false,
};

const senha = {
  senha: document.getElementById("senha"),
  validatorSenhaMessage: document.getElementById("validatorSenha"),
  ok: false,
};

const btnEntrar = document.getElementById("btn-entrar");

function validaSenha(senha) {
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])(?!.*\s).{8,}$/.test(
    senha
  );
}

function validaEmail(email) {
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
}

email.email.addEventListener("keyup", () => {
  if (!validaEmail(email.email.value)) {
    email.validatorEmailMessage.innerHTML = "E-mail inválido.";
    email.ok = false;
  } else {
    email.validatorEmailMessage.innerHTML = "";
    email.ok = true;
  }
});


window.addEventListener("change", () => {
  if (email.ok) {
    btnEntrar.classList.remove("button-secundary-rejected");
    btnEntrar.classList.add("button-secundary-accepted");
    btnEntrar.disabled = false;
  } else {
    btnEntrar.classList.remove("button-secundary-accepted");
    btnEntrar.classList.add("button-secundary-rejected");
  }
});
