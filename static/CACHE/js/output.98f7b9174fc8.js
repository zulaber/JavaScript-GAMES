''

// allows to make "interactions" with cards
document.addEventListener('DOMContentLoaded', () => {
	//SouthPark cards
	const list_of_cards = [
		{
			name: 'Butters',
			img: '/static/SP/Butters.jpg'
		},
		{
			name: 'Butters',
			img: '/static/SP/Butters.jpg'
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
	]

shuffle(list_of_cards)
// select display grip
const battlefield = document.querySelector('.south_park')
// resoult
const resoult_show = document.getElementById('resoult')
// array for chosen cards
let chosen_cards = []
// chosen id cards
let chosen_id = []
// "win" cards
let win_cards = []
// crateing battlefield
function create_battlefield() {
	for (let i = 0; i < list_of_cards.length; i++) {
		// create card
		var card = document.createElement('img')
		// setting new atribute to blank top of the card
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
	// all crds 
	let all_cards = document.querySelectorAll('img')
	// assign reveal cards
	const card1 = chosen_id[0]
	const card2 = chosen_id[1]
	if (chosen_cards[0] === chosen_cards[1]){
		all_cards[card1].setAttribute('src', '/static/SP/blank.jpg')
		all_cards[card2].setAttribute('src', '/static/SP/blank.jpg')
		alert('Yup, correct')
		win_cards.push(chosen_cards)
	} else {
		all_cards[card1].setAttribute('src', '/static/SP/top.jpg')
		all_cards[card2].setAttribute('src', '/static/SP/top.jpg')
		alert('Nope, try again')
	}
	// reset chosen cards
	chosen_cards = []
	chosen_id = []
	alert(Set(win_cards))
	resoult_show.textContent = [...new Set(win_cards)].length
	// checks for win
	if ([...new Set(win_cards)] === list_of_cards.length / 2){
		esoult_show.textContent = "Gratz, you was able to find them all"
	}

}

// allows to flip cards
function flip_card() {
	// this behavie ideanticaly in function like in class
	let card_id = this.getAttribute('id')
	chosen_cards.push(list_of_cards[card_id].name)
	chosen_id.push(card_id)
	// flip card
	this.setAttribute('src',  list_of_cards[card_id].img)
	// reveal card for x sec
	if (chosen_cards.length === 2){
		setTimeout(check_math, 500)
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