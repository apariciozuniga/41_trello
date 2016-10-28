
var boton = document.getElementById("botoncito");//agregando mi boton desde html
boton.addEventListener("click", agregarLista);

function agregarLista(){
	
	var agregar=document.getElementById("agregando");
	//añadiendo un div en javascript
	var divTarjeta = document.createElement("div");
	//creando un div para la caja donde van mis inputs
	var caja = document.createElement("input");
	//creando input
	caja.setAttribute("placeholder", "Añadir lista");
	//
	var boton1= document.createElement("button");
	//creando mi boton
	var textoGuardar= document.createTextNode("Guardar");
	//en mi boton lleva el texto guardar
	divTarjeta.appendChild(caja);
	//caja agregala a divTarjeta
	boton1.appendChild(textoGuardar);
	// textoguardar agregalo a boton1
	divTarjeta.appendChild(boton1);
	//boton1 agregalo a divTarjeta
	agregar.appendChild(divTarjeta);
	//divTarjeta agregalo a agregar

	// var boton1 = document.createElement("button");//agregando un boton
	boton1.addEventListener("click", agregarTarjeta);//Llamando al boton con eventlistener

	function agregarTarjeta(){ //funcion para añadir targeta
		var divNuevaTarjeta= document.createElement("div");
		divNuevaTarjeta.classList.add("divNuevaTarjeta");
		// creando elemento div para agregar una nueva tarjeta y quitar el input 
		var tituloTarjeta= document.createElement("h3");
		//agregando un h3 para el html
		tituloTarjeta.innerHTML=caja.value;
		// tengo que hacer variables mas pequeñas por la memoria
		caja.value= "";
		//es para que elimine el contenido del imput y ya no se vea
		divTarjeta.appendChild(tituloTarjeta);
		//tituloTarjeja agregalo a divNuevaTarjeta
		agregando.appendChild(divNuevaTarjeta);
		// caja agregalo a tituloTarjeta
		var textarea = document.createElement("textarea");
		//agregando textarea
		var botonAnadir = document.createElement("button");
		//agregando boton
		var textAnadir=document.createTextNode("Añadir");
		divNuevaTarjeta.appendChild(textarea); 
		divNuevaTarjeta.appendChild(botonAnadir);
		botonAnadir.appendChild(textAnadir);
		
		//botonAnadir agregando a divNuevaTarjeta
		
		//agregando textarea a mi div


	}
}


