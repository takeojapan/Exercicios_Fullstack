//importando o Express para o projeto
const express = require("express");

const pedidos = require("../dados.json");

//Criar uma função para mostrar os pedidos
const mostrarPedidos = (req, res) => {
    calcularSubtotais();
    res.send(pedidos);
}

const novoPedido = (req, res) => {
    //Corpo da requisição HTTP
    if(req.body){
        res.send("Pedido recebido, Aguarde alguns minutos");

        //O PUSH() Adiciona um novo elemento ao final de um array
        pedidos.push(req.body);
    } else {
        res.send("Erro ao receber pedido");
    }
}

const calcularSubtotais = () => {
    pedidos.forEach(p => {
        p.subtotal = p.precoUnitario * p.quantidade
    });
}

//Criando um servidor EXPRESS
const app = express();

//Faz o Express entender dados enviados por formulário HTML
app.use(express.urlencoded({extended:true}));

const porta = 3000;

app.get("/", mostrarPedidos);
app.post("/", novoPedido);

//Aqui vamos mandar o Express COMEÇAR A ESCUTAR AS REQUISIÇÕES
app.listen(porta, () => {
    console.log(`Cliente: http://localhost:5500/cliente`)
    console.log(`servidor : http://localhost:${porta}`)
});