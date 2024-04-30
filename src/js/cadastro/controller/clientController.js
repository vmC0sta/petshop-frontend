
async function createUserWithClientAndAddress(event) {
  event.preventDefault()
  try {

    const address = {
      name: document.getElementById("logradouro").value,
      number: document.getElementById("numero").value,
      district: document.getElementById("bairro").value,
      zipCode: document.getElementById("cep").value,
      city: document.getElementById("cidade").value,
      state: document.getElementById("estado").value
    };
    const client = {
      name: document.getElementById("nome").value,
      cpf: document.getElementById("cpf").value,
      phone: document.getElementById("telefone").value,
      address: address
    };
    const user = {
      email: document.getElementById("email").value,
      password: document.getElementById("senha").value,
      client: client
    };


    const response = await fetch('http://localhost:8080/api/user/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user: user, client: client, address: address }),
    });
    if (response.ok) {
      console.log("User created successfully");
    } else {
      console.error('Error creating user:', response.statusText);
    }
  } catch (error) {
    console.error('Error creating user:', error);
  }
}