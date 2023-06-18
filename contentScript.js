// This script will be injected into the webpage
import './src/app.css'
import Every from './src/components/every.svelte';

// Create the button element
var button = document.createElement('button');
button.innerHTML = 'C';
button.style.position = 'fixed';
button.style.top = '300px';
button.style.right = '1px';
// button.style.width = '15px';
button.style.height = '50px';
button.id = 'me'
// button.style.background = 'orange'
button.style.zIndex = '999999999999999999999999999'
button.style.borderRadius = '10px'
button.style.padding = '3px'
button.classList = ['bg-green-300 border border-black']
// var btnDiv = document.createElement('div')
// btnDiv.classList = ['flex justify-end']
// var closeBtn = document.createElement('button')
// closeBtn.innerHTML = 'X'

// input.style.height = '900px'

var target = document.createElement('div');
target.style.height = '100vh';
target.style.width = '300px';
target.style.position = 'fixed';
target.style.bottom = '0px';
target.style.right = '0px';
target.style.zIndex = '999999'
target.style.background = 'white'
target.id = 'cloe-modal'
target.classList = ['shadow-xl hidden pr-12']
// modal.innerHT




async function render() {
    new Every({target});
}

// Add event listener to the button
button.addEventListener('click', function() {
  // Perform your desired action when the button is clicked
    document.getElementById('cloe-modal').classList.toggle('hidden')
    document.getElementById('me').innerText = 'X'
});

// target.appendChild(input)
// Append the button to the body of the webpage
document.body.appendChild(target);
document.body.appendChild(button)
// document.addEventListener('DOMContentLoaded', render);
render()

// target.appendChild(btnDiv)