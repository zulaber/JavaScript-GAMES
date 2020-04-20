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
                    if (circles[index +7].classList.contains('full') &&
                        circles[index].classList.contains('full') != true) {
                        // checks if this is a correct turn of player
                        if (current_player === 1) {
                            //adds taken class for choosen token/circle

                            circles[index].classList.add('full')
                            circles[index].classList.add('player_one_4')
                            //change Player
                            current_player = 2
                            // display player on website
                            turn.innerHTML = current_player
                        } else if (current_player === 2) {
                            circles[index].classList.add('full')
                            circles[index].classList.add('player_two_4')
                            alert(circles[index].classList)
                            current_player = 1
                            turn.innerHTML = current_player
                        }// } else
                        // // if under circle is not taken cannot take it
                        //     alert('Can\'t do this')
                    }else
                    // if under circle is not taken cannot take it
                        alert('Can\'t do this')
                }
            })(i)
// win conditions
function win_condition() {
    //make const that shows all winning arrays
    const winningArrays = [
        [0, 1, 2, 3], [41, 40, 39, 38], [7, 8, 9, 10], [34, 33, 32, 31], [14, 15, 16, 17], [27, 26, 25, 24], [21, 22, 23, 24],
        [20, 19, 18, 17], [28, 29, 30, 31], [13, 12, 11, 10], [35, 36, 37, 38], [6, 5, 4, 3], [0, 7, 14, 21], [41, 34, 27, 20],
        [1, 8, 15, 22], [40, 33, 26, 19], [2, 9, 16, 23], [39, 32, 25, 18], [3, 10, 17, 24], [38, 31, 24, 17], [4, 11, 18, 25],
        [37, 30, 23, 16], [5, 12, 19, 26], [36, 29, 22, 15], [6, 13, 20, 27], [35, 28, 21, 14], [0, 8, 16, 24], [41, 33, 25, 17],
        [7, 15, 23, 31], [34, 26, 18, 10], [14, 22, 30, 38], [27, 19, 11, 3], [35, 29, 23, 17], [6, 12, 18, 24], [28, 22, 16, 10],
        [13, 19, 25, 31], [21, 15, 9, 3], [20, 26, 32, 38], [36, 30, 24, 18], [5, 11, 17, 23], [37, 31, 25, 19], [4, 10, 16, 22],
        [2, 10, 18, 26], [39, 31, 23, 15], [1, 9, 17, 25], [40, 32, 24, 16], [9, 7, 25, 33], [8, 16, 24, 32], [11, 7, 23, 29],
        [12, 18, 24, 30], [1, 2, 3, 4], [5, 4, 3, 2], [8, 9, 10, 11], [12, 11, 10, 9], [15, 16, 17, 18], [19, 18, 17, 16],
        [22, 23, 24, 25], [26, 25, 24, 23], [29, 30, 31, 32], [33, 32, 31, 30], [36, 37, 38, 39], [40, 39, 38, 37], [7, 14, 21, 28],
        [8, 15, 22, 29], [9, 16, 23, 30], [10, 17, 24, 31], [11, 18, 25, 32], [12, 19, 26, 33], [13, 20, 27, 34]
        ]   
    // takes list with 4 values and checks if they same as player
    for (let i = 0; i < winningArrays.length; i += 1) {
        // checks for winning circles if they match
        const wiin_circle_1 = circles[winningArrays[i][0]]
        const wiin_circle_2 = circles[winningArrays[i][1]]
        const wiin_circle_3 = circles[winningArrays[i][2]]
        const wiin_circle_4 = circles[winningArrays[i][3]]
        circles.forEach(c => {
            if (c.classList.contains('player_two_4')){
            alert('dsa')
            }
        })
        if (wiin_circle_2.classList.contains('player_one_4')) {
            alert('player 1')
        }
        
        if (wiin_circle_1.classList.contains('full') &&
        wiin_circle_2.classList.contains('player_one_4')) {
            alert('fdsfs')
        }
        // checks if they math player_one
        if ((wiin_circle_1.classList.contains('player_one_4')) &&
        (wiin_circle_2.classList.contains('player_one_4')) &&
        (wiin_circle_3.classList.contains('player_one_4')) &&
        (wiin_circle_4.classList.contains('player_one_4'))) {
            alert('Player 1 WINS')
        }
        // for player 2
        else if (wiin_circle_1.classList.contains('player_two_4') &&
        wiin_circle_2.classList.contains('player_two_4') &&
        wiin_circle_3.classList.contains('player_two_4') &&
        wiin_circle_4.classList.contains('player_two_4')) {
            alert('Player 2 WINS')
        }
    }

}
circles.forEach(circle => circle.addEventListener('click', win_condition())) 

});