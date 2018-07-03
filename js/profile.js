//codigo pagina profile 


const addButton = document.getElementById('addCard_button');
const input = document.getElementById('cardNumber_input_profile');
const showCard1 = document.getElementById('card1'); 
const showCard2 = document.getElementById('card2'); 
const showCard3 = document.getElementById('card3'); 
const showCard4 = document.getElementById('card4'); 

addButton.addEventListener('click', () => {
  showCard1.style.display = 'block';	
  showCard1.innerHTML = document.getElementById('cardNumber_input_profile').value;
  window.localStorage.setItem('card1', JSON.stringify(input.value)); 
  document.getElementById('cardNumber_input_profile').value = ' ';  
})

 






