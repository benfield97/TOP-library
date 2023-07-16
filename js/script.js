let myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function addBookToLibrary(title, author, numPages, read) {
  let newBook = new Book(title, author, numPages, read);
  myLibrary.push(newBook);
}

function displayBooks() {
  const libraryDiv = document.getElementById("library");
  libraryDiv.innerHTML = ""; // Clear the current display

  myLibrary.forEach((book, index) => {
    const bookDiv = document.createElement("div");
    bookDiv.innerHTML = `
      <h2>${book.title}</h2>
      <p>By: ${book.author}</p>
      <p>${book.numPages} pages</p>
      <p>Read: ${book.read ? "Yes" : "No"}</p>
      <button onclick="removeBookFromLibrary(${index})">Remove Book</button>
      <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
    `;

    libraryDiv.appendChild(bookDiv);
  });
}

function removeBookFromLibrary(index) {
  myLibrary.splice(index, 1);
  displayBooks(); // Update the display
}

function toggleReadStatus(index) {
  myLibrary[index].toggleRead();
  displayBooks(); // Update the display
}

document.getElementById("new-book-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the form values
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let numPages = document.getElementById("num-pages").value;
  let read = document.getElementById("read").checked;

  addBookToLibrary(title, author, numPages, read);

  displayBooks(); // Update the display
});
