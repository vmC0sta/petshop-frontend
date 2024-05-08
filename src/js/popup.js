const closeBtn = document.getElementById("popup-close")
const popUp = document.getElementById("popup")

closeBtn.addEventListener("click", ()=>{
    console.log("cliquei")
    popUp.style.display = 'none'
})