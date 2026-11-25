let etat = 0
function tiltElt (){
    let elt = document.querySelector('.tilt')
    let elt2 = document.querySelector('.titl2')
    if (etat === 0){
        etat += 1
        elt.style.color = "black"
        elt2.style.color = "rgb(230, 217, 74)"
    }
    else{
        elt.style.color = "rgb(230, 217, 74)"
        elt2.style.color = "rgb(15, 21, 28)"
        etat -=1
    }
} 

setInterval(tiltElt, 750)