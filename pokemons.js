const ul = document.getElementById("pokemons");
const list = document.createDocumentFragment();
const url = "https://majazocom.github.io/Data/pokemons.json";

fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

fetch(url)
  .then((responce) => responce.json())
  .then((data) => data.forEach((item) => console.log(item)))
  .catch((error) => console.error("Error:", error));

fetch(url)
  .then((response) => response.json())
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
  .catch((error) => console.error("Error:", error));
