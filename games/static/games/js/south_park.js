'{% load static %}'

document.addEventListener('DOMContentLoaded', () => {
	// cards
	const list_of_cards = [
		{
			name: 'Butters',
			img: '{% static "SP/Butters.jpg" %}',
			cheat: 0
		},
		{
			name: 'Butters',
			img: '{% static "SP/Butters.jpg" %}',
			cheat: 1
		},
		{
			name: 'Cartman',
			img: '{% static "SP/Cartman.jpg" %}',
			cheat: 0
		},
		{
			name: 'Cartman',
			img: '{% static "SP/Cartman.jpg" %}',
			cheat: 1
		},
		{
			name: 'Kenny',
			img: '{% static "SP/Kenny.jpg" %}',
			cheat: 0
		},
		{
			name: 'Kenny',
			img: '{% static "SP/Kenny.jpg" %}',
			cheat: 1
		},
		{
			name: 'Randy',
			img: '{% static "SP/Randy.jpg" %}',
			cheat: 0
		},
		{
			name: 'Randy',
			img: '{% static "SP/Randy.jpg" %}',
			cheat: 1
		},
		{
			name: 'Stan',
			img: '{% static "SP/Stan.jpg" %}',
			cheat: 0
		},
		{
			name: 'Stan',
			img: '{% static "SP/Stan.jpg" %}',
			cheat: 1
		},
		{
			name: 'Kyle',
			img: '{% static "SP/Kyle.jpg" %}',
			cheat: 0
		},
		{
			name: 'Kyle',
			img: '{% static "SP/Kyle.jpg" %}',
			cheat: 1
		},
		{
			name: 'Hankey',
			img: '{% static "SP/Hankey.jpg" %}',
			cheat: 0
		},
		{
			name: 'Hankey',
			img: '{% static "SP/Hankey.jpg" %}',
			cheat: 1
		},
		{
			name: 'Wendy',
			img: '{% static "SP/Wendy.jpg" %}',
			cheat: 0
		},
		{
			name: 'Wendy',
			img: '{% static "SP/Wendy.jpg" %}',
			cheat: 1
		},
		{
			name: 'Satan',
			img: '{% static "SP/Satan.jpg" %}',
			cheat: 0
		},
		{
			name: 'Satan',
			img: '{% static "SP/Satan.jpg" %}',
			cheat: 1
		},
	]

shuffle(list_of_cards)

const battlefield = document.querySelector('.south_park')
const result_show = document.getElementById('resoult')
let chosen_cards = []
let chosen_id = []
let win_cards = new Set()
let cheat_card = ''

function create_battlefield() {
	for (let i = 0; i < list_of_cards.length; i++) {
		var card = document.createElement('img')
		card.setAttribute('src', '{% static "SP/top.jpg" %}')
		card.setAttribute('id', i)
		card.addEventListener('click', flip_card)
		battlefield.appendChild(card)
	}
}

function check_math(){
	let all_cards = document.querySelectorAll('img')
	if (chosen_cards[0] === chosen_cards[1]) {
		all_cards[chosen_id[0]].setAttribute('src', '{% static "SP/blank.jpg" %}')
		all_cards[chosen_id[1]].setAttribute('src', '{% static "SP/blank.jpg" %}')
		win_cards.add(chosen_id[0])	
	} else {
		all_cards[chosen_id[0]].setAttribute('src', '{% static "SP/top.jpg" %}')
		all_cards[chosen_id[1]].setAttribute('src', '{% static "SP/top.jpg" %}')
	}
	if ( win_cards.size === list_of_cards.length / 2){
		result_show.textContent = "Gratz, you was able to find them all"
	} else {
		chosen_cards = []
		chosen_id = []
		result_show.textContent = win_cards.size
	}
}

function flip_card() {
	if (this.src.endsWith("blank.jpg")){
		alert("This card was already fliped")
	}else {
		let card_id = this.getAttribute('id')
		
		if (chosen_cards.length === 0){
			cheat_card = list_of_cards[card_id].cheat
			chosen_cards.push(list_of_cards[card_id].name)
			chosen_id.push(card_id)
			this.setAttribute('src',  list_of_cards[card_id].img)

		} else if ((cheat_card === list_of_cards[card_id].cheat) && 
					(chosen_cards[0] === list_of_cards[card_id].name)){
			alert('You cant flip the same card')

		} else{
			chosen_cards.push(list_of_cards[card_id].name)
			chosen_id.push(card_id)
			this.setAttribute('src',  list_of_cards[card_id].img)}

			if (chosen_cards.length === 2){
				setTimeout(check_math, 300)}
	}	
}

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
})