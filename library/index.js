// const addButton = document.querySelector('button');
// const authorInput = document.querySelector('#author');
// const titleInput = document.querySelector('#title');
// const pagesInput = document.querySelector('#pages');
// const readInput = document.querySelector('#read');
// const libraryDiv = document.querySelector('.library');
// libraryDiv.innerHTML = '';

// addButton.addEventListener('click', addBook);

// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

// function Library() {
//     this.books = [];
// }

class Library {
    constructor(books = []) {
        this._books = books;
    }

    addBook(book) {
        this._books.push(book);
    }

    get books() {
        return this._books;
    }
}

// Library.prototype.addBook = function (book) {
//     this.books.push(book);
// }

// function displayLibrary() {

//     library.books.forEach((book, index) => {
//         const bookDiv = document.createElement('div');
//         bookDiv.classList.add('book');
//         bookDiv.setAttribute('data-attribute', index);
//         bookDiv.innerHTML = `<h2>Title: ${book.title}</h2>
//         <p><em>Author:</em> ${book.author}</p>
//         <p><em>Pages:</em> ${book.pages}</p>
//         <p><em>Read:</em> ${book.read ? 'Yes' : 'No'}</p>
//         <button class="remove" onclick='removeBook(${index})'>Remove</button>
//         <label>Have you read it?</label>`;

//         const readCheckbox = document.createElement('input');

//         readCheckbox.type = 'checkbox';
//         readCheckbox.classList.add('read');

//         if (book.read) {
//             bookDiv.style.backgroundColor = 'lightgreen';
//             readCheckbox.checked = true;
//         }

//         readCheckbox.addEventListener('change', () => {
//             if (readCheckbox.checked) {
//                 bookDiv.style.backgroundColor = 'lightgreen';
//             }
//             else {
//                 bookDiv.style.backgroundColor = 'white';
//             }

//         });

//         bookDiv.appendChild(readCheckbox);
//         libraryDiv.appendChild(bookDiv);
//     });
// }



// function addBook(event) {
//     const title = titleInput.value == "" ? "The best study skill you ever now" : titleInput.value;
//     const author = authorInput.value == "" ? "Unknown" : authorInput.value;
//     const pages = pagesInput.value == "" ? 0 : pagesInput.value;
//     const read = readInput.checked;
//     const book = new Book(title, author, pages, read);
//     library.addBook(book);
//     const index = library.books.length - 1;
//     createBookBlock(book, index);
//     event.preventDefault();
// }

// function createBookBlock(book, index) {
//     const bookDiv = document.createElement('div');
//     bookDiv.classList.add('book');
//     bookDiv.setAttribute('data-attribute', index);
//     bookDiv.innerHTML = `<h2>Title: ${book.title}</h2>
//         <p><em>Author:</em> ${book.author}</p>
//         <p><em>Pages:</em> ${book.pages}</p>
//         <p><em>Read:</em> ${book.read ? 'Yes' : 'No'}</p>
//         <button class="remove" onclick='removeBook(${index})'>Remove</button>
//         <label>Have you read it?</label>`;

//     const readCheckbox = document.createElement('input');

//     readCheckbox.type = 'checkbox';
//     readCheckbox.classList.add('read');

//     if (book.read) {
//         bookDiv.style.backgroundColor = 'lightgreen';
//         readCheckbox.checked = true;
//     }

//     readCheckbox.addEventListener('change', () => {
//         if (readCheckbox.checked) {
//             bookDiv.style.backgroundColor = 'lightgreen';
//         }
//         else {
//             bookDiv.style.backgroundColor = 'white';
//         }

//     });

//     bookDiv.appendChild(readCheckbox);
//     libraryDiv.appendChild(bookDiv);
// }

// const library = new Library();
// displayLibrary();

class ScreenController {
    addButton = document.querySelector('button');
    authorInput = document.querySelector('#author');
    titleInput = document.querySelector('#title');
    pagesInput = document.querySelector('#pages');
    readInput = document.querySelector('#read');
    libraryDiv = document.querySelector('.library');

    constructor() {
        this.addButton.addEventListener('click', this.addBook.bind(this));
        this.library = new Library();
    }

    // displayLibrary() {

    //     this.library.books.forEach((book, index) => {
    //         const bookDiv = document.createElement('div');
    //         bookDiv.classList.add('book');
    //         bookDiv.setAttribute('data-attribute', index);
    //         bookDiv.innerHTML = `<h2>Title: ${book.title}</h2>
    //         <p><em>Author:</em> ${book.author}</p>
    //         <p><em>Pages:</em> ${book.pages}</p>
    //         <p><em>Read:</em> ${book.read ? 'Yes' : 'No'}</p>
    //         <button class="remove" onclick='removeBook(${index})'>Remove</button>
    //         <label>Have you read it?</label>`;

    //         const readCheckbox = document.createElement('input');

    //         readCheckbox.type = 'checkbox';
    //         readCheckbox.classList.add('read');

    //         if (book.read) {
    //             bookDiv.style.backgroundColor = 'lightgreen';
    //             readCheckbox.checked = true;
    //         }

    //         readCheckbox.addEventListener('change', () => {
    //             if (readCheckbox.checked) {
    //                 bookDiv.style.backgroundColor = 'lightgreen';
    //             }
    //             else {
    //                 bookDiv.style.backgroundColor = 'white';
    //             }

    //         });

    //         bookDiv.appendChild(readCheckbox);
    //         this.libraryDiv.appendChild(bookDiv);
    //     });
    // }

    addBook(event) {

        const title = this.titleInput.value == "" ? "The best study skill you ever now" : this.titleInput.value;
        const author = this.authorInput.value == "" ? "Unknown" : this.authorInput.value;
        const pages = this.pagesInput.value == "" ? 0 : this.pagesInput.value;
        const read = this.readInput.checked;
        const book = new Book(title, author, pages, read);
        this.library.addBook(book);
        const index = this.library.books.length - 1;
        this.createBookBlock(book, index);
        event.preventDefault();
    }

    createBookBlock(book, index) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.setAttribute('data-attribute', index);
        bookDiv.innerHTML = `<h2>Title: ${book.title}</h2>
            <p><em>Author:</em> ${book.author}</p>
            <p><em>Pages:</em> ${book.pages}</p>
            <p><em>Read:</em> ${book.read ? 'Yes' : 'No'}</p>
            <button class="remove">Remove</button>
            <label>Have you read it?</label>`;

        const removeBtn = bookDiv.querySelector(".remove");
        removeBtn.addEventListener("click", () => this.removeBook(index));
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
        this.libraryDiv.appendChild(bookDiv);
    }

    removeBook(index) {
        this.library.books.splice(index, 1);
        const bookToRemove = this.libraryDiv.querySelector(`.book[data-attribute="${index}"]`);
        bookToRemove.remove();
    }
}

const app = new ScreenController();