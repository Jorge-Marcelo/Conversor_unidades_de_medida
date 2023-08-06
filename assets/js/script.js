/*
Autor: Jorge Marcelo
Data de Criação: 09/08/2023
Github: https://github.com/Jorge-Marcelo
Linkedin: https://www.linkedin.com/in/jorge-marcelo-067a5017b/
Instagram: https://www.instagram.com/10_stronger/
Threads: https://www.threads.net/@10_stronger
*/ 


/*Pegando os elementos HTML pelo DOM*/
function converterUnidadeMedida() {
let valorEntrada = parseFloat(document.getElementById("valorEntrada").value);
let unidadeEntrada = document.getElementById("unidadeEntrada").value;
let unidadeSaida = document.getElementById("unidadeSaida").value;
let resultado = document.getElementById("resultado");

/*Condição que vai ser executada caso o valor do input
não seja um numero*/
if(isNaN(valorEntrada)){
resultado.textContent = "Por favor digite um numero";
return;
}

/*Condição que vai ser executada caso as opções
sejam iguais*/
if (unidadeEntrada === unidadeSaida) {
resultado.textContent = "O valor convertido é o mesmo: " + valorEntrada + " " + unidadeSaida;
return;
}

/*Variavel que vai armazenar 
o tipo de formmula para a conversão*/
let fatorConversaoEntrada = 1.0;

/*Oções de conversão de entrada de dados*/
switch (unidadeEntrada) {
case "quilometro":
fatorConversaoEntrada = 0.001;
break;

case "hectometro":
fatorConversaoEntrada = 0.01;
break;

case "decametro":
fatorConversaoEntrada = 0.1;
break;

case "metro":
fatorConversaoEntrada = 1.0;
break;

case "decimetro":
fatorConversaoEntrada = 10;
break;

case "centimetro":
fatorConversaoEntrada = 100;
break;

case "milimetro":
fatorConversaoEntrada = 1000;
break;
}

/*Fazer a conversão do valor do  input no valor que sera convertido*/
let valorConvertido = valorEntrada * (1 / fatorConversaoEntrada);

/*Opções da conversão de saida de dados*/
let fatorConversaoSaida = 1.0;
switch (unidadeSaida) {
case "quilometro":
fatorConversaoSaida = 0.001;
break;

case "hectometro":
fatorConversaoSaida = 0.01;
break;

case "decametro":
fatorConversaoSaida = 0.1;
break;

case "metro":
fatorConversaoSaida = 1.0;
break;

case "decimetro":
fatorConversaoSaida = 10;
break;

case "centimetro":
fatorConversaoSaida = 100;
break;

case "milimetro":
fatorConversaoSaida = 1000;
break;
}

/*Mostrando o conteudo do resultado da conversão*/
valorConvertido = valorConvertido * fatorConversaoSaida;
resultado.textContent = valorEntrada.toFixed(2) + " " + 
unidadeEntrada + " é igual a " + valorConvertido.toFixed(2) + " " 
+ unidadeSaida;
}

/*Evento de clicque do botão de conversão*/
document.addEventListener("DOMContentLoaded", function() {
let buttonConverter = document.getElementById("buttonConverter");
buttonConverter.addEventListener("click", converterUnidadeMedida);
});


/*Redes Sociais*/

/*Função que vai abrir o link do instagram*/
const instgramLink = "https://www.instagram.com/10_stronger/";
const instagramButton = document.getElementById("instagram");

function instagram(instgramLink){
const newTableInstagram = window.open(instgramLink, "_blank");
newTableInstagram.focus();
}

instagramButton.addEventListener("click", function(){
instagram(instgramLink);
})

/*Função que vai abrir o link do Threads*/
const threadsLink = "https://www.threads.net/@10_stronger";
const threadsButton = document.getElementById("threads");

function threads(threadsLink){
const newTableThreads = window.open(threadsLink, "_blank");
newTableThreads.focus();
}

threadsButton.addEventListener("click", function(){
threads(threadsLink);
})


/*Função que vai abrir o link do linkedin*/
const linkedinLink = "https://www.linkedin.com/in/jorge-marcelo-067a5017b/";
const linkedinButton = document.getElementById("linkedin");

function linkedin(linkedinLink){
const newTableLinkedin = window.open(linkedinLink, "_blank");
newTableLinkedin.focus();
}

linkedinButton.addEventListener("click", function(){
linkedin(linkedinLink);    
})


/*Função que vai abrir o link do Github*/
const githubLink = "https://github.com/Jorge-Marcelo";
const githubButton = document.getElementById("github");

function github(githubLink){
const newTableGithub = window.open(githubLink, "_blank");
newTableGithub.focus();
}

githubButton.addEventListener("click", function(){
github(githubLink);
})
