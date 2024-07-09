//elements that would be used for creating new cards(books)
const cardContainer= document.querySelector(".card-container");
const btnAdd= document.getElementById("btn-add");
const btnForm= document.getElementById("form-btn");
const sideBar= document.querySelector(".side-bar");
const bookTitle= document.getElementById("bookTitle");
const bookAuthor= document.getElementById("bookAuthor");
const bookPages= document.getElementById("bookPages");
let i=0;
//events
btnAdd.addEventListener("click",toggleSidebar);
btnForm.addEventListener("click", addingBooks)
btnForm.addEventListener("click", ()=> {
    bookTitle.value='';
    bookAuthor.value='';
    bookPages.value='';
    bookTitle.focus();
    toggleSidebar();
})
window.onload= function(){
    const header= document.querySelector("h1");
    header.classList.add("loaded");

    const mainText= document.querySelector(".text-container")
    mainText.classList.add="loaded";

}

//Object constructor 
function Books(title,author,pages) {
    this.title=title;
    this.author= author;
    this.pages= pages;
    this.info = function () {
        return `${this.title} written by ${this.author} ${this.pages} pages`;
    }
}
//Manually created books 
const book1= new Books("Hobbit","JRR Tolkien", 356);
const book2= new Books("The Great Gatsby","Fitzgerald", 222);
const book3= new Books("Old man and the sea","Hemingway", 112);
const book4= {
    title: "Matrix",
    author: "nobody",
    pages: 11
}

let mylibrary= [book1,book2,book3,book4];


function toggleSidebar() {
    sideBar.classList.toggle("active");
    bookTitle.focus();

}

function accessingArrayObjectsTitle(array,i) {
    
    titles=array[i].title 
    return titles;


}
function accessingArrayObjectsAuthor(array,i) {
    
    author=array[i].author 
    return author;


}
function accessingArrayObjectsPages(array,i) {
    
    pages=array[i].pages 
    return pages;


}
function cardCreation(book){
    const card= document.createElement("div");
    card.className="card";
    cardContainer.appendChild(card);
    
    const cardTitle= document.createElement("h3")
    cardTitle.textContent=accessingArrayObjectsTitle(mylibrary,book) //this is to be changed to the object.title

    const cardAuthor= document.createElement("p")
    cardAuthor.textContent=accessingArrayObjectsAuthor(mylibrary,book) // this is to be changed to the object.author

    const cardPages = document.createElement("p")
    cardPages.textContent= accessingArrayObjectsPages(mylibrary,book) // this is to be changed to the object.pages

    card.append(cardTitle, cardAuthor,cardPages);
}


function addingBooks(){
    let userInputTitle= bookTitle.value
    let userInputAuthor= bookAuthor.value
    let userInputPages= bookPages.value
    const book= new Books(userInputTitle, userInputAuthor,userInputPages)
    mylibrary[i]= book;
    cardCreation(i);
    i++;
}
// cardCreation(2);
// cardCreation(1);
// cardCreation(0);
// cardCreation(3);
// cardCreation(1)

console.table(mylibrary);

const hobbit = new Books("Hobbit", "JRR", 452);
console.log(hobbit.info())

