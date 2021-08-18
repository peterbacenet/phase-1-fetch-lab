// function fetchBooks() {
// fetch('https://anapioficeandfire.com/api/books')
// .then((resp) => resp.json())
// .then(data => renderBooks(data))
// done()
// return renderBooks(data)
// }

// function renderBooks(books) {
//   const main = document.querySelector('main');
//   books.forEach(book => {
//     const h2 = document.createElement('h2');
//     h2.innerHTML = book.name;
//     main.appendChild(h2);
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   fetchBooks();
// });


///
function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
    fetch("https://anapioficeandfire.com/api/books") 
    .then(response => response.json())
    .then(json => renderBooks(json));
  return fetch("https://anapioficeandfire.com/api/books")
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});


