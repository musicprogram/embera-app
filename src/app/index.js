const contenido = document.querySelector("#contenido");

const Dress = require('./Dress.js');

const dress = new Dress();

(()=>{
	contenido.innerHTML = dress.figurin()	
})()