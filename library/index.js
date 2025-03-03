const addButton = document.querySelector('button');
const authorInput = document.querySelector('#author');
const titleInput = document.querySelector('#title');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');
const libraryDiv = document.querySelector('.library');
libraryDiv.innerHTML = '';

addButton.addEventListener('click', addBook);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function Library() {
    this.books = [];
}

Library.prototype.addBook = function (book) {
    this.books.push(book);
}

function displayLibrary() {

    library.books.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.setAttribute('data-attribute', index);
        bookDiv.innerHTML = `<h2>Title: ${book.title}</h2>
        <p><em>Author:</em> ${book.author}</p>
        <p><em>Pages:</em> ${book.pages}</p>
        <p><em>Read:</em> ${book.read ? 'Yes' : 'No'}</p>
        <button class="remove" onclick='removeBook(${index})'>Remove</button>
        <label>Have you read it?</label>`;

        const readCheckbox = document.createElement('input');

        readCheckbox.type = 'checkbox';
        readCheckbox.classList.add('read');

        if (book.read) {
            bookDiv.style.backgroundColor = 'lightgreen';
            readCheckbox.checked = true;
        }

        readCheckbox.addEventListener('change', () => {
            if (readCheckbox.checked) {
                bookDiv.style.backgroundColor = 'lightgreen';
            }
            else {
                bookDiv.style.backgroundColor = 'white';
            }

        });

        bookDiv.appendChild(readCheckbox);
        libraryDiv.appendChild(bookDiv);
    });
}

function removeBook(index) {
    library.books.splice(index, 1);
    const bookToRemove = libraryDiv.querySelector(`.book[data-attribute="${index}"]`);
    bookToRemove.remove();
}

function addBook(event) {
    const title = titleInput.value == "" ? "The best study skill you ever now" : titleInput.value;
    const author = authorInput.value == "" ? "Unknown" : authorInput.value;
    const pages = pagesInput.value == "" ? 0 : pagesInput.value;
    const read = readInput.checked;
    const book = new Book(title, author, pages, read);
    library.addBook(book);
    const index = library.books.length-1;
    createBookBlock(book, index);
    event.preventDefault();
}

function createBookBlock(book,index) {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.setAttribute('data-attribute', index);
    bookDiv.innerHTML = `<h2>Title: ${book.title}</h2>
        <p><em>Author:</em> ${book.author}</p>
        <p><em>Pages:</em> ${book.pages}</p>
        <p><em>Read:</em> ${book.read ? 'Yes' : 'No'}</p>
        <button class="remove" onclick='removeBook(${index})'>Remove</button>
        <label>Have you read it?</label>`;

    const readCheckbox = document.createElement('input');

    readCheckbox.type = 'checkbox';
    readCheckbox.classList.add('read');

    if (book.read) {
        bookDiv.style.backgroundColor = 'lightgreen';
        readCheckbox.checked = true;
    }

    readCheckbox.addEventListener('change', () => {
        if (readCheckbox.checked) {
            bookDiv.style.backgroundColor = 'lightgreen';
        }
        else {
            bookDiv.style.backgroundColor = 'white';
        }

    });

    bookDiv.appendChild(readCheckbox);
    libraryDiv.appendChild(bookDiv);
}

const library = new Library();
// displayLibrary();