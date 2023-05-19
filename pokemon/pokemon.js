const botao = document.getElementById('pegarPokemon');
const tabela = document.getElementById('tabela');

const adicionaPokemonTabela = (pokemon) => {
  let tr = document.createElement('tr');
  tr.innerHTML = `
    <td> <span style="font-weight: bold"> ${pokemon.name} </span> </td>
    <td> <a href="${pokemon.url}"> Link do Pokemon </a> </td>
    `
  tabela.appendChild(tr);
}


botao.addEventListener('click',async () => {
  const dados = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1281').then(async (a) => (await a.json()).results || []);
  dados.forEach(dado => adicionaPokemonTabela(dado));
});

