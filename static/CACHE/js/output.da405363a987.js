const box = document.querySelectorAll('box_whack')
const nightmare = document.querySelectorAll('nightmare')
const time_left = document.querySelector('#time_left_whack')
let resoult = document.querySelector('#resoult_whack')

resoult = 0
function random_box(){
    // rreturns boxes where there is no mole
    box.forEach(className => {
        className.classList.remove("nightmare")
    })
    // random position for mole
    let random_nightmare_position = box[Math.floor(Math.random() * 9)]
    random_nightmare_position.classList.add('nightmare')
};