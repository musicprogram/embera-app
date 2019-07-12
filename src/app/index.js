const maniqui = document.querySelector("#maniqui");

const estanteriaSuperior = document.querySelector("#estanteriaSuperior");


const Dress = require('./Dress.js');

const dress = new Dress();

(()=>{
	maniqui.innerHTML = dress.figurin();
	estanteriaSuperior.innerHTML = dress.estanteriaSuperior()
})()