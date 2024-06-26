const popUp_message = document.getElementById("popup-message")
const popUp_img = document.getElementById("popup-img")
let message

async function createClientWithAddress(event) {
  event.preventDefault()

  const address = {
    name: document.getElementById("logradouro").value,
    number: document.getElementById("numero").value,
    district: document.getElementById("bairro").value,
    zipCode: document.getElementById("cep").value,
    city: document.getElementById("cidade").value,
    state: document.getElementById("estado").value
  };
  const client = {
    email: document.getElementById("email").value,
    password: document.getElementById("senha").value,
    name: document.getElementById("nome").value,
    cpf: document.getElementById("cpf").value,
    phone: document.getElementById("telefone").value,
    address: address
  };
  try {
    const response = await fetch('https://petshop-backend-tkps.onrender.com/api/client/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({client: client, address: address }),
    });

    if (!response.ok) {
      let errorMessage;
      errorMessage = await response.text();
      popUp.style.display = 'flex';
      popUp_message.innerHTML = errorMessage;
      popUp_img.src = 'assets/svg/error.svg'
    } else {
      popUp.style.display = 'flex';
      popUp_message.innerHTML = 'Usuário salvo com sucesso'
      popUp_img.src = 'assets/svg/sucess.svg'
    }
  } catch (error) {
    // Tratar o erro quando o servidor não está disponível
    const popUp = document.getElementById("popup");
    const popUp_message = document.getElementById("popup-message");
    popUp.style.display = 'flex';
    popUp_message.innerHTML = "Nossos serviços estão indisponíves no momento. Por favor, tente novamente mais tarde.";
  }

}


document.getElementById("btn-confirmar").addEventListener('click', createClientWithAddress)