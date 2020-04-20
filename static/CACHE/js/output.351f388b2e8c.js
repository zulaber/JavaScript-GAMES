// DOMContentLoaded - allows to include js file after DOM is fully loaded
// addEventListener - allows to add events
document.addEventListener('DOMContentLoaded', () => {
    // catch all of the grids in grid_4 class
    const circles = document.querySelectorAll('.grid_4 div')
    // catch turn 
    const turn = document.querySelector('#turn_4')
    let current_player = 1
    // adds click function to all divs in catch_4
    for (let i = 0; i < circles.length; i += 1)
            (function(index) {
                // shorter function then addEventListener np.: circles[i].onclick = () => alert('fdf')
                // adds onclick event on each circle
                circles[i].onclick = function () {
                    // allowss to add on top of circle if its already taken
                    // + 7 coz of number of rows like 0..... next line 8....
                    // .classList - shows all the classes of element .contains fucntion True False
                    if (circles[index].classList.contains('taken')) {
                        // checks if this is a correct turn of player
                        if (current_player === 1) {
                            //adds taken class for choosen token/circle
                            circles[index].classList.add('taken')
                            circles[index].classList.add('player_one_4')
                            //change Player
                            current_player = 2
                            // display player on website
                            turn.innerHTML = current_player
                        } else if (current_player === 2) {
                            circles[index].classList.add('taken')
                            circles[index].classList.add('player_two_4')
                            current_player = 1
                            turn.innerHTML = current_player
                        } else
                            alert('Can\'t do this')
                    }
                }
            })(i)
});