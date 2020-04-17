''
const choice = document.querySelectorAll('.choice_rps')
const computer_options = []
const player_img = document.querySelector('#player_img_rps')
const computer_img = document.querySelector('#computer_img_rps')
const vs = document.querySelector('#vs_rps')
choice.forEach(decision => {
    decision.addEventListener('click', player_choice)
    // adds options for pc
    computer_options.push(decision.id)
})

function player_choice() {
    const player_choice = this.id
    const computer_choice = computer_options[Math.floor(Math.random() * computer_options.length)]
    player_img.style.backgroundImage = `url(\'/static/RPS/${player_choice}.jpg\')`
    computer_img.style.backgroundImage = `url(\'/static/RPS/${computer_choice}.jpg\')`

    if (player_choice === computer_choice){
        vs.textContent = 'REMIS'
    } else if ((player_choice === "rock" && computer_choice === "scisors") || 
               (player_choice === "paper" && computer_choice === "rock") ||
               (player_choice === "scisors" && computer_choice === "paper")){
                vs.textContent = 'WIN'
    } else {
        vs.textContent = 'LOST'
    } 

};