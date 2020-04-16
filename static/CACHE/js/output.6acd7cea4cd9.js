const box = document.querySelectorAll('box_whack')
const nightmare = document.querySelectorAll('nightmare')
const time_left = document.querySelector('#time_left_whack')
let resoult = document.querySelector('#resoult_whack')

score = 0
function random_box(){
    // rreturns boxes where there is no mole
    box.forEach(className => {
        className.classList.remove("nightmare")
    })
    // random position for mole
    let random_nightmare_position = box[Math.floor(Math.random() * 9)]
    console.log(random_nightmare_position)
    random_nightmare_position.classList.add('nightmare')
    // acriveats "hit" position of the mole
    hit_position = random_nightmare_position.id
}
// all id of classes
box.forEach(id => {
    // after mouse up 
    id.addEventListener('mouseup',() => {
        // if id matches mole id
        if (id.id === hit_position){
            score += 1
            resoult.textContent = score
        }
    })
})

function move_nightmare() {
    // depends of the time 
    let timer = null
    // changes position of nightmare
    timer = setInterval(random_box, 800)
}

move_nightmare();