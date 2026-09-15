function somar(){
//Encontrando o elemento pelo ID e pegando o valor digitado
const numero1 = Number(document.getElementById("numero1").value);
// Pegamos o segundo input
const numero2 = Number(document.getElementById("numero2").value);
// Fazemos a soma
const resultado = numero1 + numero2;
document.getElementById("resultado").textContent = "Resultado:" + resultado;
}

function subtrair(){

const numero1 = Number(document.getElementById("numero1").value);

const numero2 = Number(document.getElementById("numero2").value);

const resultado = numero1 - numero2;
document.getElementById("resultado").textContent = "Resultado:" + resultado;
}

function multiplicar(){

const numero1 = Number(document.getElementById("numero1").value);

const numero2 = Number(document.getElementById("numero2").value);

const resultado = numero1 * numero2;
document.getElementById("resultado").textContent = "Resultado:" + resultado;
}

function divisao(){
    const numero1 = Number(document.getElementById("numero1").value);
    const numero2 = Number(document.getElementById("numero2").value);

    if (numero2 === 0){
        document.getElementById("resultado").textContent = 
            "Não existe divisão por zero";
        
        return;
    }

    const resultado = numero1 / numero2;

    document.getElementById("resultado").textContent = 
        "Resultado: " + resultado.toFixed(2);
}