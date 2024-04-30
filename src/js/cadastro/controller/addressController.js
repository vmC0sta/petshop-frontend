
async function buscaCep() {
    try {
        let data = await fetch(`https://viacep.com.br/ws/${cep.cep.value}/json/`)
        let response = await data.json()

        if (response.erro) {
            cep.validatorCEPMessage.innerHTML = "Cep inválido"
            cep.ok = false
            document.getElementById("logradouro").value = ''
            document.getElementById("cidade").value = ''
            document.getElementById("estado").value = ''
            document.getElementById("bairro").value = ''
            return;
        }


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

cep.cep.addEventListener('change', buscaCep)