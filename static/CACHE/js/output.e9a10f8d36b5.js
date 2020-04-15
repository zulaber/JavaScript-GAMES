''

// allows to make "interactions" with cards
document.addEventListener('DOMContentLoaded', () => {
	// cards
	const list_of_cards = [
		{
			name: 'Butters',
			img: '/static/SP/Butters.jpg',
			cheat: 0
		},
		{
			name: 'Butters',
			img: '/static/SP/Butters.jpg',
			cheat: 1
		},
		{
			name: 'Cartman',
			img: '/static/SP/Cartman.jpg'
		},
		{
			name: 'Cartman',
			img: '/static/SP/Cartman.jpg'
		},
		{
			name: 'Kenny',
			img: '/static/SP/Kenny.jpg'
		},
		{
			name: 'Kenny',
			img: '/static/SP/Kenny.jpg'
		},
		{
			name: 'Randy',
			img: '/static/SP/Randy.jpg'
		},
		{
			name: 'Randy',
			img: '/static/SP/Randy.jpg'
		},
		{
			name: 'Stan',
			img: '/static/SP/Stan.jpg'
		},
		{
			name: 'Stan',
			img: '/static/SP/Stan.jpg'
		},
		{
			name: 'Kyle',
			img: '/static/SP/Kyle.jpg'
		},
		{
			name: 'Kyle',
			img: '/static/SP/Kyle.jpg'
		},
		{
			name: 'Hankey',
			img: '/static/SP/Hankey.jpg'
		},
		{
			name: 'Hankey',
			img: '/static/SP/Hankey.jpg'
		},
		{
			name: 'Wendy',
			img: '/static/SP/Wendy.jpg'
		},
		{
			name: 'Wendy',
			img: '/static/SP/Wendy.jpg'
		},
		{
			name: 'Satan',
			img: '/static/SP/Satan.jpg'
		},
		{
			name: 'Satan',
			img: '/static/SP/Satan.jpg'
		},
	]

// shuffle(list_of_cards)

// select display grip
const battlefield = document.querySelector('.south_park')
// result
const result_show = document.getElementById('resoult')
result_show.textContent = 0
// array for chosen cards
let chosen_cards = []
// chosen id cards
let chosen_id = []
// "win" cards
let win_cards = new Set()
// creating battlefield
function create_battlefield() {
	for (let i = 0; i < list_of_cards.length; i++) {
		// create card-img
		var card = document.createElement('img')
		// setting new attribute to blank top of the card
		card.setAttribute('src', '/static/SP/top.jpg')
		// adds id to manage cards
		card.setAttribute('id', i)
		// adds flip function when card is clicked
		card.addEventListener('click', flip_card)
		battlefield.appendChild(card)
	}
}
// checks if the are two the same images
function check_math(){
	// all cards 
	let all_cards = document.querySelectorAll('img')
	if (chosen_cards[0] === chosen_cards[1]) {
		all_cards[chosen_id[0]].setAttribute('src', '/static/SP/blank.jpg')
		all_cards[chosen_id[1]].setAttribute('src', '/static/SP/blank.jpg')
		win_cards.add(chosen_id[0])
		alert('Correct')		
	} else {
		all_cards[chosen_id[0]].setAttribute('src', '/static/SP/top.jpg')
		all_cards[chosen_id[1]].setAttribute('src', '/static/SP/top.jpg')
		alert('Try again')
	}
	// checks for win
	if ( win_cards.size === list_of_cards.length / 2){
		result_show.textContent = "Gratz, you was able to find them all"
	} else {
		// reset chosen cards
		chosen_cards = []
		chosen_id = []
		result_show.textContent = win_cards.size
	}

}
// allows to flip cards
function flip_card() {
	// checks for cheat
	let cheat_card = ''
	// this behavie ideanticaly in function like in class
	if (this.src.endsWith("blank.jpg")){
		alert("This card was already fliped")
	}else {
		let card_id = this.getAttribute('id')
		if (chosen_cards.length === 1){
			cheat_card = list_of_cards[card_id].cheat
			alert(cheat_card + 'ta 2 ' + list_of_cards[card_id].cheat)
		}

		if (cheat_card === list_of_cards[card_id].cheat){
			alert('You cant flip the same card')
		} else{
			chosen_cards.push(list_of_cards[card_id].name)
			chosen_id.push(card_id)
			// flip card
			this.setAttribute('src',  list_of_cards[card_id].img)}
	}	
	// reveal card for x sec

	if (chosen_cards.length === 2){
		setTimeout(check_math, 300)
	}
}
// shufle 
function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;
	while (0 !== currentIndex) {
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex -= 1;
	  temporaryValue = array[currentIndex];
	  array[currentIndex] = array[randomIndex];
	  array[randomIndex] = temporaryValue;
	}
	return array;
  }
create_battlefield()

});