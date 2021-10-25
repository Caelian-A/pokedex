//Start of IIFE
let pokemonRepository = (function () {
  let pokemonList = [
    {name: 'Eevee', height: 0.3, type: ['normal']},
    {name: 'Bulbasaur', height: 0.7, type: ['grass','posion']},
    {name: 'Charmander', height: 0.6, type: ['fire']},
    {name: 'Squirtle', height: 0.5, type: ['water']},
    {name: 'Pidgey', height: 0.3, type: ['flying', 'normal']}
];

  //returns the pokemonList array
  function getAll() {
    return pokemonList;
};

  //adds new data to the pokemonList array
  function add(pokemonData) {
    pokemonList.push(pokemonData);
};

  return {
    getAll: getAll,
    add: add
  };

  //End of IIFE
})();
  document.write('<ul>');
//define data to new variables using getAll()
pokemonRepository.getAll().forEach(function(pokemonData){
  let pokemonName = pokemonData.name
  let pokemonHeight = pokemonData.height
  let PokemonType = pokemonData.type
  //Write to the document.
  document.write('<li>');
  document.write(pokemonName + " - Height: " + pokemonHeight +"m");
  if (pokemonHeight > 0.6) document.write("  - Wow, thats tall!");
  document.write("</li>");
});
document.write("</ul>");
