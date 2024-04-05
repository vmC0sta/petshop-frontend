const nome_pet = {
    nome: document.getElementById("nome_pet"),
    validatorNomeMessage: document.getElementById("validatorNomePet"),
    ok: false,
}

const tamanhoSelecionado = document.getElementById("tamanho_pet")

const tamanhos_pet = {
    pequeno: "P",
    medio: "M",
    grande: "G"
}

const servicos_disponiveis = {
    servicosP: document.getElementsByClassName("porte-pequeno"),
    servicosM: document.getElementsByClassName("porte-medio"),
    servicosG: document.getElementsByClassName("porte-grande")
}

window.addEventListener('change', () => {

    console.log(tamanhoSelecionado.value)

    switch (tamanhoSelecionado.value) {
        case tamanhos_pet.pequeno:
            for (let i = 0; i < servicos_disponiveis.servicosP.length; i++) {
                console.log(servicos_disponiveis.servicosP[i])
                servicos_disponiveis.servicosP[i].removeAttribute('disabled', true);

                servicos_disponiveis.servicosM[i].setAttribute('disabled', true);
                servicos_disponiveis.servicosG[i].setAttribute('disabled', true);
            }
            break;
        case tamanhos_pet.medio:
            for (let i = 0; i < servicos_disponiveis.servicosM.length; i++) {
                console.log(servicos_disponiveis.servicosM[i])
                servicos_disponiveis.servicosM[i].removeAttribute('disabled', true);

                servicos_disponiveis.servicosP[i].setAttribute('disabled', true);
                servicos_disponiveis.servicosG[i].setAttribute('disabled', true);
            }
            break;
        case tamanhos_pet.grande:
            for (let i = 0; i < servicos_disponiveis.servicosG.length; i++) {
                console.log(servicos_disponiveis.servicosG[i])
                servicos_disponiveis.servicosG[i].removeAttribute('disabled', true);

                servicos_disponiveis.servicosP[i].setAttribute('disabled', true);
                servicos_disponiveis.servicosM[i].setAttribute('disabled', true);
            }
            break;
    }
})