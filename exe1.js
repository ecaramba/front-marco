// https://github.com/isquicha/exercicios-logica
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
    var n1 = window.prompt("Digite o num1");
    var n2 = window.prompt("Digite o num2");

    if (n1 >= n2)
    {
        window.alert("o numero maior é: " + n1)
    } else 
    {
        window.alert("O numero maior é: " + n2);
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

function exe12() 
{
    // 1 pegar a altura
    var altura = prompt("digite sua altura");
    // 2 calcular o peso usando (72.7*altura) - 58
    var peso = (72.7 * parseFloat(altura) ) - 58;
    // 3 exibir o resultado
    alert("peso ideal é: " + peso);

}

function exe16()
{
    // 1 - pegar a area em m2
    var area = prompt("Digite a area");
    // 2 - calcular quantidade de tinta
        // 1 lata = 18 litros = 3 * 18 = 54 m2
        // 1 litro = 3 m2
        // 1 lata = 80 reais
    var latas = parseFloat(area) / 54;
    latas = Math.ceil(latas);

    var total = latas * 80;

    // 3 - informar a quantide de latas e o preço total
    alert("Voce vai precisar de " + latas + " latas e o valor é: " +total)

    // teste 300m2
    // 300 / 54 = 6 latas
    // total = 6 * 80 = 480
}

function exe18()
{
    // 1 - pedir o tmb do arquivo
    // 2 - pedir velocidade da internet
    // 3 - calcule o tempo de download

    // 5mb 
    // 1 mb = 1024 kb
    // 1 kb = 1024 bytes
    // 1 byte = 8 bits
    
    // 100Mbps / 8 -> para Mb
}

function exe24()
{
    // 1 pedir n1
    var n1 = prompt("digite o n1");
    // 2 pedir n2
    var n2 = prompt("digite o n2");
    // 3 pedir n3
    var n3 = prompt("digite o n3");
    // 4 dizer qual é o maior

    // testes
    // n1.   n2.  n3. 
    // 1.    2.   3.   -> 3
    // 3.    2.   1    -> 3
    // 1.    3.   2.   -> 3
    // 3.   1.   2.   -> 3
    // 2.   1.  3.    -> 3
    // 2.    3.  1.   ->  3
    // 3.   3.   3.   -> 3

    if (n1 >= n2)
    {
        if (n1 >= n3)
        {
            alert("n1 é o maior");
        } else
        {
            alert("n2 é o maior");
        }
    } else 
    {
        if (n2 >= n3)
        {
            alert("n2 é o maior");
        } else 
        {
            alert("n3 é o maior");
        }
    }
}

function exe31()
{
    // 1 - pedir o numero
    var semana = prompt("digite o dia da semana");
    // 2 - imprimir o dia da semana

    if (semana == 1)
    {
        console.log("Domingo");
    } else if (semana == 2){
        console.log("segunda");
    }

    // 3 - Se valor for invalido informar
}

