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


// allows to flip cards
function flip_card() {
	// this behavie ideanticaly in function like in class
	let card_id = this.getAttribiute('id')
	chosen_cards.push(list_of_cards[card_id])
	this.setAttribute('src',  list_of_cards[card_id].img)
}
create_battlefield()

});