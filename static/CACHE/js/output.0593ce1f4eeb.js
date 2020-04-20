// DOMContentLoaded - allows to include js file after DOM is fully loaded
// addEventListener - allows to add events
document.addEventListener('DOMContentLoaded', () => {
    // catch all of the grids in grid_4 class
    const circles = document.querySelectorAll('.grid_4 div')
    // catch turn 
    const turn = document.querySelector('#turn_4')
    current_player = 1
    // adds click function to all divs in catch_4
    for (let i = 0; i < circles.length; i += 1){
       // circles[i].addEventListener('onclick', alert('fsd'))
       circles[i].onclick = () => alert('fdf')
    }
});