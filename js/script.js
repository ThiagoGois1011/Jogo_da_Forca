var iniciaJogo = document.querySelector("#iniciaJogo");
var tabuleiro = document.querySelector("#tabuleiro");
var novoJogo = document.querySelector("#novoJogo");
var adicionar = document.querySelector("#adiciona");
var nova = document.querySelector("#nova-palavra");
var salva = document.querySelector("#salvar");
var cancelar = document.querySelector("#cancelar");
var botoes = document.querySelector(".button");
var desistir = document.querySelector("#desistir");
var p;
var caixa = document.getElementById("escreve");

var usado;
var siga;
var errou;
var fimDJogo;
var acertou;

var lista = ["desafio","salamandra", "computador", "sandalia", "teclado", "automovel", "futebol", "ventilador","estatua","piscina"];
var elemento;
var el;
var resultado;


document.addEventListener("keypress" , function(evento){
	var keycode = event.keyCode;
	console.log(keycode)
	
	if(keycode >= 65 && keycode <=90 || 
		keycode >= 97 && keycode <=122 || 
		keycode == 231 || keycode == 199 || keycode == 32){

		var key = event.key;
		
		
	letrasUsadas(key);
	escreve(key);
	
	}
});


	
	

iniciaJogo.addEventListener( "click" , comecar);
adicionar.addEventListener( "click" , adicionaPalavra);
salva.addEventListener( "click" , salvar);
cancelar.addEventListener( "click" , cancela);
novoJogo.addEventListener( "click" , comecar);
desistir.addEventListener( "click" , desistirDJogo);




function comecar(){
	

	iniciaJogo.style.display = "none";
	adicionar.style.display = "none"
	tabuleiro.style.display = "block";
	botoes.style.display = "flex";
	criaCanvas();
	var selectC = document.querySelector("#canvas");
	var pincel = selectC.getContext("2d");
	
	pincel.fillStyle = "#0A3871";
	pincel.fillRect(65, 270, 350, 2);
	variaveis();
	traco(el);
	console.log(resultado);
	novoJogo.style.display = "inline-block";
	desistir.style.display = "inline-block";

	
}

function desistirDJogo(){

	iniciaJogo.style.display = "inline-block";
	adicionar.style.display = "inline-block";
	tabuleiro.style.display = "none";
	botoes.style.display = "none";
}

function criaCanvas(){	

	tabuleiro.innerHTML = "";
	var canvas = document.createElement("canvas");
	canvas.setAttribute("width", "700");
	canvas.setAttribute("height", "440");
	canvas.setAttribute("id", "canvas");
	canvas.setAttribute("class", "canvas");
	tabuleiro.appendChild(canvas);

}

function adicionaPalavra(){

	nova.style.display = "flex";
	adicionar.style.display = "none"
	iniciaJogo.style.display = "none";

}


function salvar(){
	
	lista.push(caixa.value);
	nova.style.display = "none";
	comecar();
}

function cancela(){
	nova.style.display = "none";
	iniciaJogo.style.display = "inline-block";
	adicionar.style.display = "inline-block";
	caixa.value = "";

}

function variaveis(){
	usado = [ ];
	siga = true;
	errou = 0;
	fimDJogo = false;
	acertou = 0;
	elemento = lista[Math.floor(Math.random() * lista.length)];
	el = elemento.length;
	resultado = elemento.split("");
	p = 120;
}

function traco(quantidade){

	var o = 1;
	var x = 63;
	var y = 350;
	var selectC = document.querySelector("#canvas");
	var pincel = selectC.getContext("2d");

	while(quantidade >= o){
		
	pincel.fillStyle = "#0A3871";
	pincel.fillRect(x, y, 40, 2);
	 x = x + 50;
	o++ ;
	}
}

function forca(erros){

	var selectC = document.querySelector("#canvas");
	var pincel = selectC.getContext("2d");
	pincel.fillStyle = "#0A3871";
	pincel.strokeStyle = "#0A3871";

	if(erros == 1){
		pincel.fillRect(150, 270, 2, -220);
	}

	if(erros == 2){
		pincel.fillRect(150, 270, 2, -220);
		pincel.fillRect(150, 50, 170, 2);

	}

	if(erros == 3){
		pincel.fillRect(150, 270, 2, -220);
		pincel.fillRect(150, 50, 170, 2);
		pincel.fillRect(320, 50, 2, 25);
	}

	if(erros == 4){

		pincel.fillRect(150, 270, 2, -220);
		pincel.fillRect(150, 50, 170, 2);
		pincel.fillRect(320, 50, 2, 25);
		pincel.beginPath();
        pincel.arc(320,99, 25, 0, 2 * 3.14);
        pincel.stroke();
        pincel.arc(320,99, 26, 0, 2 * 3.14);
        pincel.stroke();

	}

	if(erros == 5){

		pincel.fillRect(150, 270, 2, -220);
		pincel.fillRect(150, 50, 170, 2);
		pincel.fillRect(320, 50, 2, 25);
		pincel.beginPath();
        pincel.arc(320,99, 25, 0, 2 * 3.14);
        pincel.stroke();
        pincel.arc(320,99, 26, 0, 2 * 3.14);
        pincel.stroke();
        pincel.fillRect(320, 123, 2, 80);

	}

	if(erros == 6){

		pincel.fillRect(150, 270, 2, -220);
		pincel.fillRect(150, 50, 170, 2);
		pincel.fillRect(320, 50, 2, 25);
		pincel.beginPath();
        pincel.arc(320,99, 25, 0, 2 * 3.14);
        pincel.stroke();
        pincel.arc(320,99, 26, 0, 2 * 3.14);
        pincel.stroke();
        pincel.fillRect(320, 123, 2, 80);
        pincel.moveTo(320, 140);
		pincel.lineTo(290, 170);
		pincel.stroke();
		pincel.moveTo(320, 140);
		pincel.lineTo(291, 170);
		pincel.stroke();

	}

	if(erros == 7){

		pincel.fillRect(150, 270, 2, -220);
		pincel.fillRect(150, 50, 170, 2);
		pincel.fillRect(320, 50, 2, 25);
		pincel.beginPath();
        pincel.arc(320,99, 25, 0, 2 * 3.14);
        pincel.stroke();
        pincel.arc(320,99, 26, 0, 2 * 3.14);
        pincel.stroke();
        pincel.fillRect(320, 123, 2, 80);

        pincel.moveTo(320, 140);
		pincel.lineTo(290, 170);
		pincel.stroke();
		pincel.moveTo(320, 140);
		pincel.lineTo(291, 170);
		pincel.stroke();

		pincel.moveTo(320, 138);
		pincel.lineTo(350, 170);
		pincel.stroke();
		pincel.moveTo(320, 138);
		pincel.lineTo(351, 170);
		pincel.stroke();

	}

	if(erros == 8){

		pincel.fillRect(150, 270, 2, -220);
		pincel.fillRect(150, 50, 170, 2);
		pincel.fillRect(320, 50, 2, 25);
		pincel.beginPath();
        pincel.arc(320,99, 25, 0, 2 * 3.14);
        pincel.stroke();
        pincel.arc(320,99, 26, 0, 2 * 3.14);
        pincel.stroke();
        pincel.fillRect(320, 123, 2, 80);
        
        pincel.moveTo(320, 140);
		pincel.lineTo(290, 170);
		pincel.stroke();
		pincel.moveTo(320, 140);
		pincel.lineTo(291, 170);
		pincel.stroke();

		pincel.moveTo(320, 138);
		pincel.lineTo(350, 170);
		pincel.stroke();
		pincel.moveTo(320, 138);
		pincel.lineTo(351, 170);
		pincel.stroke();

		pincel.moveTo(321, 203);
		pincel.lineTo(299, 233);
		pincel.stroke();
		pincel.moveTo(321, 203);
		pincel.lineTo(300, 233);
		pincel.stroke();


	}

	if(erros == 9){

		pincel.fillRect(150, 270, 2, -220);
		pincel.fillRect(150, 50, 170, 2);
		pincel.fillRect(320, 50, 2, 25);
		pincel.beginPath();
        pincel.arc(320,99, 25, 0, 2 * 3.14);
        pincel.stroke();
        pincel.arc(320,99, 26, 0, 2 * 3.14);
        pincel.stroke();
        pincel.fillRect(320, 123, 2, 80);
        
        pincel.moveTo(320, 140);
		pincel.lineTo(290, 170);
		pincel.stroke();
		pincel.moveTo(320, 140);
		pincel.lineTo(291, 170);
		pincel.stroke();

		pincel.moveTo(320, 138);
		pincel.lineTo(350, 170);
		pincel.stroke();
		pincel.moveTo(320, 138);
		pincel.lineTo(351, 170);
		pincel.stroke();

		pincel.moveTo(321, 203);
		pincel.lineTo(299, 233);
		pincel.stroke();
		pincel.moveTo(321, 203);
		pincel.lineTo(300, 233);
		pincel.stroke();

		pincel.moveTo(322, 203);
		pincel.lineTo(340, 233);
		pincel.stroke();
		pincel.moveTo(322, 203);
		pincel.lineTo(341, 233);
		pincel.stroke();

	}

}

function letrasUsadas(key){

	var n = usado.length + 1;
	var naoAchou1 = 0;

	for(var o = 0; o < n; o++){

			if(usado.length == 0 ){
				usado.push(key);
				
				break;
			}
			else if(key == usado[o]){
				siga = false;
				
				break;

			}else {
				siga = true;
				
				naoAchou1++;
				if(naoAchou1 == usado.length){
				setTimeout(function(){
				usado.push(key);
				},99);
				}
				
				
			}

		}

}

function escreve(key) {	

	var naoAchou = 0;
	for(var i = 0; i < resultado.length; i++){
	var selectC = document.querySelector("#canvas");
	var pincel = selectC.getContext("2d");
	var chave = key.toLowerCase();
	var r = resultado[i].toLowerCase();
	

		if (chave == r && siga == true && fimDJogo == false){

			var a = 50 * i;
			var position = 70;
			if(i == 0){
				pincel.fillStyle = "#0A3871";
				pincel.font = "40px serif"
				pincel.fillText(key.toUpperCase(),position,340);
				acertou++;
			}
			else if(i >= 1){
				position = 70 + a;
				pincel.fillStyle = "#0A3871";
				pincel.font = "40px serif"
				pincel.fillText(key.toUpperCase(),position,340);
				acertou++;
				if(acertou == resultado.length){
					pincel.fillStyle = "green";
					pincel.font = "30px serif"
					pincel.fillText("Você Venceu!!",400,170);
					fimDJogo = true;

				}
			}		
					
			}else {

			naoAchou++;
			if(naoAchou == resultado.length && siga == true && errou < 9 && fimDJogo == false){
				errou++;
				forca(errou);
				pincel.fillStyle = "red";
				pincel.font = "30px serif"
				pincel.fillText(key.toUpperCase(),p,400);
				p = p + 30;

				if(errou == 9){
					pincel.fillStyle = "red";
					pincel.font = "30px serif"
					pincel.fillText("Você Perdeu!!",400,170);
					fimDJogo = true;

				}
			}
			}		
		}

}


