'use strict';
console.log('domPr.js');

// 1. pakeisti h1 antrastes texta 'Dynamic Heading' (.textContent = )

// const h1El = document.querySelector('#mainHeading');
const h1El = document.querySelector('h1');
console.log('h1El ===', h1El);
h1El.textContent = 'Dynamic Heading';

// 2. nustatyti h1 fonto dydi i 57px (style.fontSize = )
h1El.style.fontSize = '57px';

// 3. <p id="art__text">Lorem ipsum dolor</p> gauti ir atspausdinti konsolelje sito elemento teksta
const pArtEl = document.getElementById('art__text');
const pText = pArtEl.textContent;
console.log('pText ===', pText);
// 4. atvaizduoti konsoleje kolekcija arba nodelist is <ul id="colors" class="list"> elemento li elementu.
const liEls = document.querySelectorAll('#colors li');
console.log('liEls ===', liEls);

// 5. nusitaikyti ir pakeisti teksta <p id="art__date">Date</p> i 2022-10-19
const pDateEl = document.querySelector('#art__date');
pDateEl.textContent = '2022-10-19';
const now = new Date();
console.log('now ===', now.toLocaleDateString());
pDateEl.textContent = now.toLocaleDateString();

// 6. pakeisti paskutinio <ul id="colors" class="list"> elemento spalva i tomato
// liEls[2].style.color = 'tomato';
const lastLiEl = document.querySelector('#colors li:last-child');
// lastLiEl.style.color = 'tomato';

const sarasas = document.querySelector('#colors');
sarasas.lastElementChild.style.color = 'tomato';
