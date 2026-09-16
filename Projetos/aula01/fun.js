function imprime (texto) {
    console.log("New Jeans Never Die");
    console.log(texto);
}
imprime("so fresh, so clean");

function mult(New, Jeans) {
    let res = New * Jeans;
    return res;
}
console.log(mult(5, 5));

let resmult = mult(5, 5);
imprime(resmult);

function calcIRPF(salario){
    let novoS = salario - (salario*0.1);
    return novoS;
}

function calcINSS(salario){
    let novoS = salario - (salario*0.05);
    return novoS;
}

function calcPS(salario, consultas){
    let descConsulta = consultas * 10;
    let descPS = salario * 0.02;
    let novoS = salario - (descConsulta + descPS);
    return novoS;
}

let salario = 2500;

salario = calcIRPF(salario);
salario = calcINSS(salario);
salario = calcPS(salario, 3);

console.log("salario com descontos : " + salario);

const test = () => {
    console.log("TESTE");
};
test();