var meuTitulo = document.getElementById('meu-elemento'); //Pegar o elemento

meuTitulo.innerText = 'oi'; //muda o texto interno da tag

meuTitulo.style.display = 'none'; //.style pode mudar todas as coisas que tem dentro de uma tag style


//Criar um elemento
let dado = document.createElement('p');
dado.style.backgroundColor = 'red'
dado.innerText = 'eai'
document.getElementById('container').appendChild(dado) // Appendchild adiciona um "Filho" ao elemento

input.value // pega o valor
