//Defining the array
pokemonList = [
  {name: 'Eevee', height: 0.3, type: ['normal']},
  {name: 'Bulbasaur', height: 0.7, type: ['grass','posion']},
  {name: 'Charmander', height: 0.6, type: ['fire']},
  {name: 'Squirtle', height: 0.5, type: ['water']},
  {name: 'Pidgey', height: 0.3, type: ['flying', 'normal']}
];
document.write('<ul>')
for (let i = 0; i < pokemonList.length; i++){
  document.write('<li>')
  document.write(pokemonList[i].name + " - Height: " + pokemonList[i].height +"m");
  if (pokemonList[i].height > 0.6) document.write("  - Wow, thats tall!");
  document.write("</li>");
}
document.write("</ul>");
