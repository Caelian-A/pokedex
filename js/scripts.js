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
    pkButton.classList.add('pk-button');
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
      showPKModal(pokemon.name, pokemon.height, pokemon.weight, pokemon.type1, pokemon.type2, pokemon.xp, pokemon.imageUrl);
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
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.xp = details.base_experience;
      item.weight = details.weight;
      item.type1 = details.types[0].type.name;
      item.type2 = details.types[1].type.name;
    }).catch(function (e) {
      console.error(e);
    });
  }

  let pkModalContainer = document.querySelector('#pk-modal-container');

  function showPKModal(name, height, weight, type1, type2, xp, img) {
    pkModalContainer.innerHTML = '';
    let pkModal = document.createElement('div');
    pkModal.classList.add('pkModal');
    //Code for the elements of the modal
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('pk-modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', closeModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = name;

    let pkHeight = document.createElement('p');
    pkHeight.innerText = 'Height: ' + height + 'm';

    let pkWeight = document.createElement('p');
    pkWeight.innerText = 'Weight: ' + weight + 'kg';

    let pkTypes = document.createElement('p');
    pkTypes.innerText = 'Type(s): ' + type1 + ' & ' + type2;

    let pkXP = document.createElement('p');
    pkXP.innerText = 'Base Experience: ' + xp;

    let pkImage = document.createElement('img')
    pkImage.classList.add('pkimage');
    pkImage.src = img;

    pkModal.appendChild(titleElement);
    pkModal.appendChild(closeButtonElement);
    pkModal.appendChild(pkHeight);
    pkModal.appendChild(pkWeight);
    pkModal.appendChild(pkTypes);
    pkModal.appendChild(pkXP);
    pkModal.appendChild(pkImage);
    pkModalContainer.appendChild(pkModal);
    pkModalContainer.classList.add('is-visible');
  }
  //modal closure
  function closeModal() {
    pkModalContainer.classList.remove('is-visible');
    pkModalContainer.addEventListener('click', (e) => {
      let target = e.target;
      if (target === pkModalContainer) {
        closeModal();
      }
    })
  };

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && pkModalContainer.classList.contains('is-visible')) {
      closeModal();
    };
  });

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