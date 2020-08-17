//
// Práctica 10 - Cronómetro
//

console.log('Esto es un cronómetro!');

let intervalId;
let ss = 0;
let mm = 0;
let hh = 0;
const crono = document.getElementById ('cronometro');


function move () {
  crono.innerHTML = ss++;
  if (ss == 60) {
    ss = 0;
    crono.innerHTML = mm++;
  }
  if ( mm == 60) {
    mm = 0;
    crono.innerHTML = hh++;
  }
  crono.innerHTML = `${hh}: ${mm}: ${ss}:`;
}

function start () {
  intervalId = window.setInterval(move, 1000);
}

function stop () {
 window.clearInterval(intervalId);
}

function clear () {
  window.clearTimeout(intervalId);
  ss = 0;
  mm = 0;
  hh = 0;
  crono.innerHTML = `00: 00: 00:`;
}

const iniciar = document.getElementById('iniciar');
iniciar.addEventListener('click', start);
const detener = document.getElementById('detener');
detener.addEventListener('click', stop);
const limpiar = document.getElementById('limpiar');
limpiar.addEventListener('click', clear);