const fetchUrl = "https://majazocom.github.io/Data/attendees.json";
const visitorUl = document.getElementById("visitors");
const visitorsWithAlergies = document.getElementById("avisitors");
const visitorList = document.createDocumentFragment();
const visitorWAllergiesList = document.createDocumentFragment();

fetch(fetchUrl)
  .then((response) => response.json())
  .then((data) => console.log(data));

fetch(fetchUrl)
  .then((response) => response.json())
  .then((data) => {
    data.map((visitor) => {
      let li = document.createElement("li");
      let name = document.createElement("h2");
      name.innerHTML = `${visitor.name}`;
      visitor.attending === true ? li.appendChild(name) && visitorList.appendChild(li) : null;
    });
    visitorUl.appendChild(visitorList);
  })
  .catch((error) => console.error("Error:", error));

fetch(fetchUrl)
  .then((response) => response.json())
  .then((data) => {
    data.map((visitorWAllergies) => {
      let li = document.createElement("li");
      let name = document.createElement("h2");
      name.innerHTML = `${visitorWAllergies.name}`;
      visitorWAllergies.attending === true && visitorWAllergies.allergies.length != 0
        ? li.appendChild(name) && visitorWAllergiesList.appendChild(li)
        : null;
    });
    visitorsWithAlergies.appendChild(visitorWAllergiesList);
  })
  .catch((error) => console.error("E:", error));
