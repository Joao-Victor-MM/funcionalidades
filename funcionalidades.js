let bola = document.getElementById("bola")
let trilho = document.getElementById("botão-trilho")
let body = document.querySelector('body')

let configbutton = document.getElementById("config-menu")
let configmenu = document.getElementById("configurações")

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle("light")
    bola.classList.toggle("light")
    body.classList.toggle("light")
 
})

configbutton.addEventListener('click', ()=>{
    configbutton.classList.toggle("openmenu")
    configmenu.classList.toggle("openmenu")
})