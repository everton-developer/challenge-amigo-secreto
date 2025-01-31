// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//let listaDeAmigos = ["Everton", "Janaína", "Gustavo", "Agatha", "Silvia"];
let listaDeAmigos = [];
let campo = document.getElementById("listaAmigos");
let nomeDigitado = document.querySelector("input");
let botaoAdicionarAmigo = document.getElementsByClassName("button-add")[0];
let qtdNomes;
let numeroSorteado;
let amigoSecreto;
let resultado = document.getElementById("resultado");

function adicionarAmigo() {
  if (nomeDigitado.value.trim().length !== 0) {
    listaDeAmigos.push(nomeDigitado.value);
    resultado.innerHTML = "";
    campo.innerHTML = listaDeAmigos.join("<br>");
    console.log(listaDeAmigos);
  } else {
    alert("Insira um nome válido!");
  }
  nomeDigitado.value = "";
}

function sortearAmigo() {
  if (listaDeAmigos.length >= 2) {
    qtdNomes = listaDeAmigos.length;
    numeroSorteado = parseInt(Math.random() * qtdNomes + 1) - 1;
    amigoSecreto = listaDeAmigos[numeroSorteado];
    console.log(`Tamanho da Lista de amigos ${listaDeAmigos.length}`);
    console.log(`Número escolhido ${numeroSorteado}`);
    console.log(`Nome escolhido ${amigoSecreto}`);
    campo.innerHTML = "";
    resultado.innerHTML = `O amigo secreto é o(a):${"<br>"} ${amigoSecreto}`;
    listaDeAmigos.splice(numeroSorteado, 1);
    console.log(`Lista dos nomes restantes:
${listaDeAmigos}`);
  } else if ((listaDeAmigos.length == 1)) {
    alert(`Restou somente o(a) ${listaDeAmigos[0]}!
Insira pelo menos mais um nome para realizar um novo sorteio!`);
  } else {
    alert("Insira pelo menos 2 nomes para realizar o sorteio!");
  }
}
