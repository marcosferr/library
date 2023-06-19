let myLibrary = [];
let form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault()
    addBookToLibrary()
})
//Form Fields
const title = document.getElementById('title');
const author = document.getElementById('author');
const pages = document.getElementById('pages');
const read = document.getElementById('read');
//Book list
const bookList = document.getElementById('bookList')

function getFieldsValues() {
    let newBookValues = {}
    newBookValues['title'] = title.value;
    newBookValues['author'] = author.value;
    newBookValues['pages'] = pages.value;
    newBookValues['read'] = read.checked;
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
Book.prototype.toggleRead = function () {
    this.read = !this.read
}
function toggleBookStatus(index) {
    myLibrary[index].toggleRead()
    renderBooks()
}
function addBookToLibrary() {
    const newBookData = getFieldsValues();
    const newBook = new Book(newBookData.title, newBookData.author, newBookData.pages, newBookData.read)
    myLibrary.push(newBook)
    console.log(myLibrary)
    renderBooks()
}
function deleteBook(index) {
    myLibrary.splice(index, 1)
    renderBooks()
}
function renderBooks() {
    const booksData = myLibrary.reduce((total, el, i) => {
        return (total += `<div class='card' id=${i}> 
        <span> Title: ${el.title} </span><br/>
        <span> Author: ${el.author} </span><br/>
        <span> Pages: ${el.pages} </span><br/>
        <button onClick='toggleBookStatus(${i})'>  ${el.read ? 'read' : 'not read yet'} </button> <br> 
       
        <button onClick='deleteBook(${i})'>Eliminar Libro </button>
        <div>`)
    }, '')
    bookList.innerHTML = ''
    bookList.innerHTML = booksData
    console.log(booksData)
}
