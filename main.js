let myLibrary = [];
let form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault()
})
//Form Fields
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');

function getFieldsValues() {
    let newBookValues = {}
    newBookValues['title'] = title.value;
    newBookValues['author'] = author.value;
    newBookValues['pages'] = pages.value;
    newBookValues['read'] = read.value;
    return newBookValues
}



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author,
        this.pages = pages;
    this.read = read;
    this.info = () => {
        return (`${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read ' : 'not read yet'}`)
    }
}
Book.prototype.toggleRead = () => { this.read = !read }
function addBookToLibrary() {
    const newBookData = getFieldsValues();
    const newBook = new Book(newBookData.title, newBookData.author, newBookData.pages, newBookData.read)
    myLibrary.push(newBook)
    console.log(myLibrary)
}



console.log(theHobbit.info())