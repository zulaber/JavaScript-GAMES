const choice = document.querySelectorAll('.choice_rps')

choice.forEach(decision => {
    decision.addEventListener('click', player_choice)
})

function player_choice() {
    alert(this.id)
};