''
const choice = document.querySelectorAll('.choice_rps')
const computer_options = []
const player_img = document.querySelector('#player_img_rps')
choice.forEach(decision => {
    decision.addEventListener('click', player_choice)
    // adds options for pc
    computer_options.push(decision.id)
})

function player_choice() {
    const player_choice = this.id
    const computer_choice = computer_options[Math.floor(Math.random() * computer_options.length)]
    player_img.style.backgroundImage =  url("/static/RPS/rock.jpg")
    alert(player_choice + '      ' + computer_choice)
};