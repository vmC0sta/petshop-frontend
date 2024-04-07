const cep = document.getElementById("cep")

cep.addEventListener('change', buscaCep)


async function buscaCep() {
    try {
        let data = await fetch(`https://viacep.com.br/ws/${cep.value}/json/`)
        let response = await data.json()
        document.getElementById("logradouro").value = response.logradouro
        document.getElementById("cidade").value = response.localidade
        document.getElementById("estado").value = response.uf
        document.getElementById("bairro").value = response.bairro

        for (let i = 0; i < document.getElementsByClassName("endereco").length; i++) {
            if (cep.value === null || cep.value === undefined) {
                document.getElementsByClassName("endereco")[i].value.innerHTML = ''
                
            }

        }

    } catch (error) {
        console.log(error)
    }
}

function saveAddress() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')

    let address = {
        con
    }
}