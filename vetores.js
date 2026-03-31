
var cidade = "curitiba";
var cidade2 = "Colombo";
var cidade3 = "Pinhais";

// vetores -> matrizes -> estrutura de dados
// array
var cidades = ["Curitiba", "Colombo", "Pinhais"];

// add elementos do array
cidades.push("Colombo");

// pegar um item
console.log(cidades[1]);

// mudar valor 
cidades[2] = "Lapa";

// remover um item
cidades.pop();


// estruturas de repetição -> loop

// contar de 0 -> 10

var ini = 0;
var fim = 10;

while ( ini <= fim)
{
    console.log(ini);
    ini = ini + 1;
} 

var ini = 0;
var fim = cidades.length - 1;

while (ini <= fim)
{
    console.log(cidades[ini]);
    ini = ini + 1;
}



