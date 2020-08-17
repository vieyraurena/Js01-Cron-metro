//
// Práctica 10 - Cronómetro
//

console.log('Esto es un cronómetro!');

let intervalId;
let seconds = 0;
const crono = document.getElementById('cronometro');

function move () {
  crono.innerHTML = seconds++;
}

function start () {
  intervalId = window.setInterval(move, 1000)
}

function stop () {
 window.clearInterval(intervalId);
}

function clear () {
  window.clearTimeout(intervalId);
  seconds = 0
  crono.innerHTML = 0;
}

const iniciar = document.getElementById('iniciar');
iniciar.addEventListener('click', start);
const detener = document.getElementById('detener');
detener.addEventListener('click', stop);
const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', clear);