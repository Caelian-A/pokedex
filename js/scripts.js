//Start of IIFE
let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Eevee', height: 0.3, type: ['normal'] },
    { name: 'Bulbasaur', height: 0.7, type: ['grass', 'posion'] },
    { name: 'Charmander', height: 0.6, type: ['fire'] },
    { name: 'Squirtle', height: 0.5, type: ['water'] },
    { name: 'Pidgey', height: 0.3, type: ['flying', 'normal'] }
  ];

  //returns the pokemonList array
  function getAll() {
    return pokemonList;
  };

  //adds new data to the pokemonList array
  function add(pokemon) {
    pokemonList.push(pokemon);
  };

  // Creates pokemon list in document
  function addListItem(pokemon) {
    let pkList = document.querySelector('.pokemon-list');
    let pkListItem = document.createElement('li');
    let pkButton = document.createElement('button');
    pkButton.innerText = pokemon.name;
    pkButton.classList.add('pk-button');
    pkListItem.appendChild(pkButton);
    pkList.appendChild(pkListItem);
    pkButton.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }
  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem
  };

  //End of IIFE
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);

});


//   let pokemonName = pokemonData.name
//     let pokemonHeight = pokemonData.height
//     let PokemonType = pokemonData.type
//     //Write to the document.
//     document.write('<li>');
//     document.write(pokemonName + " - Height: " + pokemonHeight + "m");
//     if (pokemonHeight > 0.6) document.write("  - Wow, thats tall!");
//     document.write("</li>");