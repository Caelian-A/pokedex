//Defining the array
pokemonList = [
  {name: 'Eevee', height: 0.3, type: ['normal']},
  {name: 'Bulbasaur', height: 0.7, type: ['grass','posion']},
  {name: 'Charmander', height: 0.6, type: ['fire']},
  {name: 'Squirtle', height: 0.5, type: ['water']},
  {name: 'Pidgey', height: 0.3, type: ['flying', 'normal']}
];
//Listing the name and height of each pokemon in the array.
for (let i = 0; i < pokemonList.length; i++){
  document.write(pokemonList[i].name + " - Height: " + pokemonList[i].height +"m");
// Conditional to deteremine which Pokemon have a height greater than 0.6m. using <br> temporarily until i figure out how to make it a list!
  if (pokemonList[i].height > 0.6) document.write("  - Wow, thats tall!" + "<br>");
  else document.write("<br>");
}
