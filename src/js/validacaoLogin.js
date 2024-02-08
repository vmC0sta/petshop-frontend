const email = {
  email: document.getElementById("email"),
  ok: false
};

const senha ={
  senha: document.getElementById("senha"),
  ok: false
}

const btnEntrar = document.getElementById("btn-entrar")

const validatorEmailMessage = document.getElementById("validatorEmail");
const validatorSenhaMessage =document.getElementById("validatorSenha");

function validaSenha(senha){
  return /^(?=.*[A-Z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>.^*()%!-])(?!.*\s).{8,}$/.test(senha)
}

function validaEmail(email) {
  return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
}

email.email.addEventListener("keyup", () => {
  if (!validaEmail(email.email.value)) {
    validatorEmailMessage.innerHTML = "E-mail inválido.";
    email.ok = false

  } else {
    validatorEmailMessage.innerHTML = "";
    email.ok = true
  }
});

senha.senha.addEventListener("keyup",()=>{
  if(!validaSenha(senha.senha.value)){
    validatorSenhaMessage.innerHTML = "A senha deve conter pelo menos 8 caracteres, uma letra maiúscula, um número e um símbolo."
    senha.ok = false
  }else{
    validatorSenhaMessage.innerHTML = ""
    senha.ok = true
  }
})

window.addEventListener("change",()=>{
  if(email.ok && senha.ok){
    btnEntrar.classList.remove("button-secundary-rejected");
    btnEntrar.classList.add("button-secundary-accepted");
    btnEntrar.disabled = false;
  }else{
    btnEntrar.classList.remove("button-secundary-accepted");
    btnEntrar.classList.add("button-secundary-rejected");
  }
})