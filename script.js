const ul = document.getElementById("pokemons");
const list = document.createDocumentFragment();
const url = "https://majazocom.github.io/Data/pokemons.json";
// request all the pokemons with fetch from the API
fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
// render the objects one and one in the console.
fetch(url)
  .then((responce) => responce.json())
  .then((data) => {
    let pokemons = data;
    pokemons.forEach((pokemon) => {
      console.log(pokemon);
    });
  })
  .catch((error) => console.error("Error:", error));

//  render the name of the objects in the DOM instead of the console to make it visible for the user.

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let pokemons = data;

    pokemons.map((pokemon) => {
      let li = document.createElement("li");
      let name = document.createElement("h2");

      name.innerHTML = `${pokemon.name}`;

      li.appendChild(name);
      list.appendChild(li);
    });
    ul.appendChild(list);
  })
  .catch(function (error) {
    console.log(error);
  });
