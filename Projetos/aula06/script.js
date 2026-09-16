const produto = document.getElementById("produto");
const preco = document.getElementById("preco");
const quantidade = document.getElementById("quantidade");

const botao = document.getElementById("btnAdicionar");

const listaprodutos = document.getElementById("listaprodutos");

const total = document.getElementById("total");

let valorTotal = 0;

botao.addEventListener("click", function(){

    const nomeProduto = produto.value;

    const valorProduto = parseFloat(preco.value);

    const qtd = parseInt(quantidade.value);

    if(nomeProduto === "" || isNaN(valorProduto) || isNaN(qtd)){
        alert("preencha todos os campos!");

        return;
    }

    const subtotal = valorProduto * qtd;

    valorTotal = valorTotal + subtotal

    const item = document.createElement("li");

    item.textContent = `${nomeProduto} - ${qtd} - R$ ${subtotal.toFixed(2)}`

    listaprodutos.appendChild(item);

    total.textContent = `R$ ${valorTotal.toFixed(2)}`;

    produto.value = "";
    preco.value = "";
    quantidade.value = 1;
});