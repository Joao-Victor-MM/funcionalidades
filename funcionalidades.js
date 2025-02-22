let bola = document.getElementById("bola")
let trilho = document.getElementById("botão-trilho")
let body = document.querySelector('body')

let configbutton = document.getElementById("config-menu")
let configmenu = document.getElementById("configurações")

let home = document.getElementById("inicio")
let more = document.getElementById("mais")
let mainhome = document.getElementById("home-content")
let mainmore = document.getElementById("more-content")

trilho.addEventListener('click', ()=>{
    trilho.classList.toggle("light")
    bola.classList.toggle("light")
    body.classList.toggle("light")
 
})

configbutton.addEventListener('click', ()=>{
    configbutton.classList.toggle("openmenu")
    configmenu.classList.toggle("openmenu")
})

home.addEventListener('click', ()=>{
    mainhome.classList.add("homemenu")
    mainmore.classList.add("homemenu")
    mainmore.classList.remove("moremenu")
    mainhome.classList.remove("moremenu")
})

more.addEventListener('click', ()=>{
    mainhome.classList.remove("homemenu")
    mainmore.classList.remove("homemenu")
    mainmore.classList.add("moremenu")
    mainhome.classList.add("moremenu")
})
