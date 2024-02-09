// request all the pokemons with fetch from the API
// fetch(url)
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error:", error));
// // render the objects one and one in the console.
// fetch(url)
//   .then((responce) => responce.json())
//   .then((data) => {
//     let pokemons = data;
//     pokemons.forEach((pokemon) => {
//       console.log(pokemon);
//     });
//   })
//   .catch((error) => console.error("Error:", error));

//  render the name of the objects in the DOM instead of the console to make it visible for the user.

function fetchData() {
  const ul = document.getElementById("authors");
  const list = document.createDocumentFragment();
  const url = "https://majazocom.github.io/Data/pokemons.json";
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let authors = data;

      authors.map(function (author) {
        let li = document.createElement("li");
        let name = document.createElement("h2");
        let email = document.createElement("span");

        name.innerHTML = `${author.name}`;
        email.innerHTML = `${author.email}`;

        li.appendChild(name);
        li.appendChild(email);
        list.appendChild(li);
      });
    })
    .catch(function (error) {
      console.log(error);
    });

  ul.appendChild(list);
}
