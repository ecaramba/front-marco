
function exe3()
{
    var n1 = prompt("Digite o num1");
    var n2 = prompt("Digite o num2");

    var soma = parseInt(n1) + parseInt(n2);
    alert("a soma é: " + soma);
}

function exe5()
{
    var metros = prompt("digite metros");
 
    var vezes = parseFloat(metros)  *100;
 
    alert("o numero de metros em centímetros é " + parseInt(vezes) + "cm");
}

function exe19()
{
    var n1 = prompt("Digite o num1");
    var n2 = prompt("Digite o num2");

    if (n1 >= n2)
    {
        alert("o numero maior é: " + n1)
    } else 
    {
        alert("O numero maior é: " + n2);
    }

}

function exe21()
{
    var letra = prompt("Digite F ou M");

    // letra = f

    if (letra == "F")
    {
        alert("Feminino");
    } else if(letra == "M") 
    {
        alert("Masculino")
    } else if(letra == "f")
    {
        alert("Feminino");
    } else if(letra == "m")
    {
        alert("Masculino")
    }
     else 
    {
        alert("Sexo Invalido")
    }


}

function exe22()
{
    var letra = prompt("Digite uma letra para saber se é vogal ou consoante");
 
 


    if (letra == "a") {
        alert("vogal")
    
    }
    else if (letra == "e") {
        alert("vogal")
    
    }
    else if (letra == "i") {
        alert("vogal")
    
    }
    else if (letra == "o") {
        alert("vogal")
    
    }
    else if (letra == "u") {
        alert("vogal")
    
    }
    else {
        alert("é consoante")
    
    }

    // resumida usando OU -> ||

    if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")
    {
        alert("vogal")
    } else {
        alert("é consoante")
    
    }
}