'{% load static %}'
document.addEventListener('DOMContentLoaded',()=>{const list_of_cards=[{name:'Butters',img:'{% static "SP/Butters.jpg" %}'},{name:'Butters',img:'{% static "SP/Butters.jpg" %}'},{name:'Cartman',img:'{% static "SP/Cartman.jpg" %}'},{name:'Cartman',img:'{% static "SP/Cartman.jpg" %}'},{name:'Kenny',img:'{% static "SP/Kenny.jpg" %}'},{name:'Kenny',img:'{% static "SP/Kenny.jpg" %}'},{name:'Randy',img:'{% static "SP/Randy.jpg" %}'},{name:'Randy',img:'{% static "SP/Randy.jpg" %}'},{name:'Stan',img:'{% static "SP/Stan.jpg" %}'},{name:'Stan',img:'{% static "SP/Stan.jpg" %}'},{name:'Kyle',img:'{% static "SP/Kyle.jpg" %}'},{name:'Kyle',img:'{% static "SP/Kyle.jpg" %}'},]
const battlefield=document.querySelector('.south_park')
const resoult_show=document.getElementById('resoult')
let chosen_cards=[]
let chosen_id=[]
let win_cards=new Set()
function create_battlefield(){for(let i=0;i<list_of_cards.length;i++){var card=document.createElement('img')
card.setAttribute('src','{% static "SP/top.jpg" %}')
card.setAttribute('id',i)
card.addEventListener('click',flip_card)
battlefield.appendChild(card)}}
function check_math(){let all_cards=document.querySelectorAll('img')
const card1=chosen_id[0]
const card2=chosen_id[1]
if(chosen_cards[0]===chosen_cards[1]){all_cards[card1].setAttribute('src','{% static "SP/blank.jpg" %}')
all_cards[card2].setAttribute('src','{% static "SP/blank.jpg" %}')
alert('Yup, correct')
win_cards.add(chosen_cards[0])}else{all_cards[card1].setAttribute('src','{% static "SP/top.jpg" %}')
all_cards[card2].setAttribute('src','{% static "SP/top.jpg" %}')
alert('Nope, try again')}
chosen_cards=[]
chosen_id=[]
resoult_show.textContent=win_cards.size
if(win_cards.size===list_of_cards.length/2){resoult_show.textContent="Gratz, you was able to find them all"}}
function flip_card(){if(this.src.endsWith("blank.jpg")){alert("Eeee, what are you doing? This was already fliped")}else{let card_id=this.getAttribute('id')
chosen_cards.push(list_of_cards[card_id].name)
chosen_id.push(card_id)
this.setAttribute('src',list_of_cards[card_id].img)}
if(chosen_cards.length===2){setTimeout(check_math,500)}}
function shuffle(array){var currentIndex=array.length,temporaryValue,randomIndex;while(0!==currentIndex){randomIndex=Math.floor(Math.random()*currentIndex);currentIndex-=1;temporaryValue=array[currentIndex];array[currentIndex]=array[randomIndex];array[randomIndex]=temporaryValue;}
return array;}
create_battlefield()});