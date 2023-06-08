const nome_do_usuario = prompt("Olá,qual é o seu nome ?");
const cidades_visitadas = prompt(
  "Voçê já visitou alguma cidade ? (\nSIM ou \nNÃO"
);
let contagem = 0;
let lugares =""
while (cidades_visitadas === "sim") {

let lugares = prompt("Qual foi?");
contagem++;
cidades_visitadas = prompt("voce visitou alguma outra?");
}
alert {
  "nome_do_usuario:" + nome_do_usuario + 
  "cidades_visitada" + lugares
}
