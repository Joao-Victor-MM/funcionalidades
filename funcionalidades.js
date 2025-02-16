let bola = document.getElementById("bola")
let trilho = document.getElementById("botão-trilho")
let body = document.querySelector('body')


trilho.addEventListener('click', ()=>{
    trilho.classList.toggle("light")
    bola.classList.toggle("light")
    body.classList.toggle("light")
 
})
