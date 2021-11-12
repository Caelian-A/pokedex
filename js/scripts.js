//Start of IIFE
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiURL = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
    pkButton.classList.add('pk-button', 'btn');
    pkButton.setAttribute('data-toggle', 'modal');
    pkButton.setAttribute('data-target', '#pkModal');
    pkListItem.classList.add('group-list-item');
    pkListItem.appendChild(pkButton);
    pkList.appendChild(pkListItem);
    //Event Listener for click
    pkButton.addEventListener('click', function () {
      showDetails(pokemon);
    });
  }
  // Creates Modal with details of the pokemon
   function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showPKModal(pokemon);
    });
  } 
  // Fetches basic pokemon details from API.
  function loadList() {
    return fetch(apiURL).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsURL: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  };
  // Fetches Image, Height, weight, types, base xp.
  function loadDetails(item) {
    let url = item.detailsURL;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      item.imageUrl = details.sprites.other.dream_world.front_default;
      item.height = details.height;
      item.xp = details.base_experience;
      item.weight = details.weight;
      item.types = details.types;
    }).catch(function (e) {
      console.error(e);
    });
  }
  function showPKModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");
    modalTitle.empty();
    modalBody.empty();
  
    let nameElement = $("<h1>" + pokemon.name + "</h1>");
    let imageElement = $('<img class="modal-img" style="width:50%">') 
    imageElement.attr("src", pokemon.imageUrl);
    let heightElement = $("<p>" + 'Height: ' + pokemon.height + 'm' + "</p>");
    let weightElement = $("<p>" + 'Weight: ' + pokemon.weight + 'kg' + "</p>");
    let typesString = '<p> Type<span class = notCapitalised>(s)</span>: ';
      for (let i = 0; i < pokemon.types.length; i++) {
      typesString = typesString + pokemon.types[i].type.name;
      if (i != pokemon.types.length - 1) typesString = typesString + ' & ';
      }
      let typesElement = $("<p>" + typesString + "</p>");
      console.log(typesElement);
      let xpElement = $("<p>" + 'Base Experience: ' + pokemon.xp + "</p>");
  
      modalTitle.append(nameElement);
      modalBody.append(imageElement);
      modalBody.append(heightElement);
      modalBody.append(weightElement);
      modalBody.append(typesElement);
      modalBody.append(xpElement);
      }

  return {
    getAll: getAll,
    add: add,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails
  }
  //End of IIFE
})();

pokemonRepository.loadList().then(function () {
  pokemonRepository.getAll().forEach(function (pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});