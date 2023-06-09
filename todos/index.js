const botao = document.getElementById('botao');
const input = document.getElementById('todos')
const divItens = document.getElementById('divItens')

let itens = []
getLocalStorage();

botao.addEventListener('click', (_) => {
  if (input.value) {
    itens.push(input.value)
  }
  adicionarItens()
  addLocalStorage()
});


function adicionarItens() {
  divItens.innerHTML = '';
  itens.forEach((item, i) => {
    let row = document.createElement('div');
    row.className = 'row mt-3';
    row.innerHTML = `
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            ${i} - ${item}
          </div>
        </div>
      </div>
    `;
    divItens.appendChild(row);
  });
}

function addLocalStorage() {
  localStorage.setItem('itens', JSON.stringify(itens))
}

function getLocalStorage () {
  try {
    itens = JSON.parse(localStorage.getItem('itens'));
    adicionarItens();
  } catch (error) {
    localStorage.setItem('itens', '[]');
  }
}

function excluir(_) {
  const idExclusao = prompt('Informe o Id:');
  itens.splice(idExclusao, 1);
  adicionarItens();
  addLocalStorage();
}
