let myLibrary = [];
let form = document.getElementById('form');
form.addEventListener('submit', e => {
    e.preventDefault()
})
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

}

let theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false);

console.log(theHobbit.info())