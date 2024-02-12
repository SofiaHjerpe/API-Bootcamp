const dul = document.getElementById("dogs");
const dlist = document.createDocumentFragment();
const dogUrl = "https://majazocom.github.io/Data/dogs.json";

fetch(dogUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

fetch(dogUrl)
  .then((response) => response.json())
  .then((data) => data.forEach((item) => console.log(item)))
  .catch((error) => console.error("Error:", error));

fetch(dogUrl)
  .then((response) => response.json())
  .then((data) => {
    let dogs = data;

    dogs.map((dog) => {
      let li = document.createElement("li");
      let name = document.createElement("h2");
      name.innerHTML = `${dog.name}`;

      li.appendChild(name);
      dlist.appendChild(li);
    });
    dul.appendChild(dlist);
  })
  .catch((error) => console.error("Error:", error));
