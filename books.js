const bookUrl = "https://majazocom.github.io/Data/books.json";
const bookUl = document.getElementById("books");
const bookList = document.createDocumentFragment();

fetch(bookUrl)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

fetch(bookUrl)
.then((response) => response.json())
.then((data) => {
  let books = data;
    books.map((book) =>{
      let li = document.createElement("li");
      let name = document.createElement("h2");

      name.innerHTML = `${book.title}`;
      book.pages < 501 ? li.appendChild(name) && bookList.appendChild(li) : null;
    })
    bookUl.appendChild(bookList)
}).catch((error) => console.error("Error:", error))

