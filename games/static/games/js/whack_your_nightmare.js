const box = document.querySelectorAll(".box_whack");
const nightmare = document.querySelectorAll('.nightmare')
const time_left = document.querySelector('#time_left_whack')
let resoult = document.querySelector('#resoult_whack')
let current_time = time_left.textContent

score = 0
current_time = 30

function random_box(){
    box.forEach(className => {
        className.classList.remove("nightmare")        
    })
    let random_nightmare_position = box[Math.floor(Math.random() * 9)]
    random_nightmare_position.classList.add('nightmare')
    hit_position = random_nightmare_position.id
}

box.forEach(id => {
    id.addEventListener('click',() => {
        if (id.id === hit_position){
            score += 1
            resoult.textContent = score
        }
    })
})

function move_nightmare() {
    let timer = null
    console.log(timer)
    timer = setInterval(random_box, 500)
}

function count_down() {
    current_time -= 1
    time_left.textContent = current_time
    if (current_time === 0 ){
         clearInterval(timer)
         alert('GAME OVER!!! You was able to get ' + score + ' points')
    }
}
alert("PREPARE YOURSELF TO FIGHT THE BIGGEST ENEMY IN THE WORLD")
let timer = setInterval(count_down, 1000)

move_nightmare()