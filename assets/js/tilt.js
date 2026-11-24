let etat = 0
function tiltElt (){
    let elt = document.querySelector('.tilt')
    if (etat === 0){
        etat += 1
        elt.style.color = "black"
    }
    else{
        elt.style.color = "rgb(230, 217, 74)"
        etat -=1
    }
    console.log("func exe")
} 

setInterval(tiltElt, 650)