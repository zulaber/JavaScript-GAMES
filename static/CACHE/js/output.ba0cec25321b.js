// DOMContentLoaded - allows to include js file after DOM is fully loaded
// addEventListener - allows to add events
document.addEventListener('DOMContentLoaded', () => {
    // catch all of the grids in grid_4 class
    const circles = document.querySelectorAll('.grid_4 div')
    // catch turn 
    const turn = document.querySelector('#turn_4')
    current_player = 1 
    // adds click function to all divs in catch_4
    for (let i = 0; i < circles.length; i += 1)
        (function(index){
        // shorter function then addEventListener np.: circles[i].onclick = () => alert('fdf')
        // adds onclick event on each circle
            circles[i].onclick = function () {
            // allowss to add on top of circle if its already taken
            // + 7 coz of number of rows like 0..... next line 8....
            // .classList - shows all the classes of element .contains fucntion True False
            if (circles[index + 7].classList.contains('taken')) {
                alert('2fs')
                // checks if this is a correct turn of player
                if (current_player === 1) {
                    //adds taken class for choosen token/circle
                    alert('2fs')
                    circles[i].classList.add('taken')
                    circles[i].classList.add('player_one_4')
               }
           }
       }
    })
});