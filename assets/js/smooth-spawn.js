let elt = document.querySelector(".hero-sub")
let elt2 = document.querySelector(".whoami")
let elt3 = document.querySelector(".hero-name")

elt.style.transform = "translateX(-200%)"
elt2.style.transform = "translateX(-200%)"
elt3.style.transform = "translateX(-200%)"

function funcSmotthspawn(){
    elt.style.transition = '1.5s ease'
    elt.style.transform = "translateX(50%)"

    elt2.style.transition = '1.5s ease'
    elt2.style.transform = "translateX(50%)"
}

function fastfuncSmottspawn(){
    elt3.style.transition = '750ms ease'
    elt3.style.transform = "translateX(10%)"
}

function funcOriginalPos(){
    elt.style.transition = "900ms ease"
    elt2.style.transition = "900ms ease"
    elt3.style.transition = "900ms ease"

    elt.style.transform = "translateX(0)"
    elt2.style.transform = "translateX(0)"
    elt3.style.transform = "translateX(0)"
}

setTimeout(funcSmotthspawn, 10)
setTimeout(fastfuncSmottspawn, 10)
setTimeout(funcOriginalPos, 1000)