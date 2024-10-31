import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// setupCounter(document.querySelector('#counter'));

// function addition(num1, num2) {
//   return num1 + num2;
// }

// function calculate() {
//   let firstNumber = parseFloat(document.getElementById('firstNumber').value);
//   let secondNumber = parseFloat(document.getElementById('secondNumber').value);

//   let result = addition(firstNumber, secondNumber);

//   document.getElementById('result').innerText = result;
// }
// let btn = document.querySelector('button')
// btn.addEventListener('click',calculate)


const pokemonListe = document.getElementById('pokeListe');
console.log(pokemonListe);
const pokemonApiContact = async () => {
    const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log('pokemonData',pokemonData);
    const pokemonDataTransformed = await pokemonData.json();
    console.log('pokemonDataTransformed',pokemonDataTransformed);
    console.log(pokemonDataTransformed.results[0].name);
    for(let i=0;i<pokemonDataTransformed.results.length;i++){
        let listElement = document.createElement('p');
        listElement.innerText = pokemonDataTransformed.results[i].name;
        pokemonListe.append(listElement);
    }
};
pokemonApiContact();

