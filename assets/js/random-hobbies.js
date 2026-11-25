let item = document.querySelector('.randomItem')
let liste = ["Devellopemment", "Sport", "Musique"]
let index = 0

function funcChangeItem(){
    console.log(index)
    item.textContent = liste[index]
    if (index === 2){
        index = 0
    }
    index += 1

}

setInterval(funcChangeItem, 2500)