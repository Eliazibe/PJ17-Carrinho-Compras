
// esses intem sao fora da function, para quando a function for acionada eles n repetir 

let total; 
limpar ()

function adicionar() {
// recuperar valores: nome do produto, quantidade e valor;
let produto = document.getElementById('produto').value;
let nomeProduto = produto.split('-')[0]; // pegando apenas o nome do produto 
let valorUnitario = produto.split('R$')[1]; // pegando apenas o valor do produto 
let quantidade = document.getElementById('quantidade').value;

// calcular o preco, subtotal
let preco = quantidade*valorUnitario;

// adicionar no carrinho

let carrinho = document.getElementById('lista-produtos');

carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}</span> ${nomeProduto} <span class="texto-azul">R$${valorUnitario}</span>
        </section>`;

// atualizar o valor total

total = total + preco;

let totalgeral = document.getElementById('valor-total');

totalgeral.textContent = `R$ ${total}`;

document.getElementById('quantidade').value = 0; // a cada item adicionado no carrinho, o campo de quantidade ira zerar 

};

function limpar() {
    total = 0; //iniciando o valor do carrinho como 0
    document.getElementById('lista-produtos').innerHTML = ''; //iniciando o carrinho sem nada
    document.getElementById('valor-total').textContent = 'R$ 0'; //iniciando o valor total com 0 

}