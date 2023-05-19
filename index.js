// const tagOi = document.getElementById('tagOi')

// tagOi.innerText = 'tchau' // Muda texto
// tagOi.style.color = '#050'

// const vetor = ['bernardo', 'alguem', 'fulano', 1231];

// const ol = document.getElementById('ol')

// vetor.forEach((item, i) => {
//   let li = document.createElement('li');
//   li.innerHTML = `
//     <p><span style="font-weight: bold"> ${item} </span> </p>
//   `
//   ol.appendChild(li)
// });

const botao = document.getElementById('botao');

botao.addEventListener('click', () => {
  let botaoSeparado = botao.innerText.split(' ');
  let cliques = Number(botaoSeparado[1]);
  if (cliques >= 20) {
    if (!confirm('Mais?')) {
      return prompt('Amém')
    }
  }
  botao.innerText = `clicou ${++cliques} vezes!`
})
