const box = document.querySelectorAll('box_whack')
const nightmare = document.querySelectorAll('nightmare')
const time_left = document.querySelector('#time_left_whack')
let resoult = document.querySelector('#resoult_whack')

resoult = 0
console.log(box)
function random_box(){
    box.forEach(className => {
        className.classList.remove("nightmare")
    })
};