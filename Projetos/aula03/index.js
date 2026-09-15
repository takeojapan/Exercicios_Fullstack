function dobro(su7){
     return su7*2;
}console.log(dobro(12));

function verificarNumero(banana){
    if(banana>0){
        return "positive";
    }else if (banana<0){
        return "negative";
    }else{
        return "igual a zero";
    }
    console.log("resultado: " + banana);
}console.log(verificarNumero(0));

function maiorNumero(rx7, rx6, maior){
    if (rx7>rx6){
        console.log("maior é", + rx7);
        return;
    } else if (rx6>rx7){
        console.log("maior é", + rx6);
        return;
    }
    console.log(maior + ": ");
}
     maiorNumero(10, 20);

function calcularIdade(crryear, nsyear){
    return crryear - nsyear;
}

calcularIdade(2026, 2010);

function celsiusParaFahrenheit(c){
    console.log("C para F: " + (f = (c * 1.8) + 32));
    return;
    }
function fahrenheitParaCelsius(f){
    console.log("F para C: " + (C = (f - 32) / 1.8));
    return;
}
celsiusParaFahrenheit(30);
fahrenheitParaCelsius(86);

function calcularIMC(peso, altura, imc){
    console.log("calculo do IMC: " + (IMC = peso/(altura*altura)));
}
calcularIMC(60, 1.70);


    