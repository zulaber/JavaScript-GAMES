const choice = document.querySelectorAll('.choice_rps')
const computer_options = []
choice.forEach(decision => {
    decision.addEventListener('click', player_choice)
    computer_options.push(decision.id)
})

function player_choice() {

    alert(computer_options)
};