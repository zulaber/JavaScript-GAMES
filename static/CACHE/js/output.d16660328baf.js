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

// select display grip
const battlefield = document.querySelector('.south_park')
// array for chosen cards
const chosen_cards = []
// crateing battlefield
const chosen_id = []
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
		alert(chosen_cards[0])
		alert(chosen_cards[1])
		alert(card1)
		list_of_cards[card1].setAttribute('src', '/static/SP/blank.jpg')
		list_of_cards[card2].setAttribute('src', '/static/SP/blank.jpg')
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
create_battlefield()

});