//elements that would be used for creating new cards(books)
const cardContainer= document.querySelector(".card-container");
const btnAdd= document.getElementById("btn-add");
const btnForm= document.getElementById("form-btn");
const sideBar= document.querySelector(".side-bar");
const bookTitle= document.getElementById("bookTitle");
const bookAuthor= document.getElementById("bookAuthor");
const bookPages= document.getElementById("bookPages");
const bookRead= document.getElementById("bookRead");
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
function Books(title,author,pages, bookCounter) {
    this.title=title;
    this.author= author;
    this.pages= pages;
    this.bookCounter=bookCounter;
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
function toggleReadStatus(spanRead, id ,svgRead, svgNotRead) {
    if(id==="span-svg-read"){
        spanRead.innerHTML= svgNotRead;
        spanRead.id="span-svg-not-read"
    }
    else if(id==="span-svg-not-read")
        {
            spanRead.innerHTML=svgRead;
            spanRead.id="span-svg-read"
        }
    
};

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
function cardCreation(bookNum){
    const card= document.createElement("div");
    card.className="card";
    card.id=`card${bookNum}`;
    cardContainer.appendChild(card);
    const cardTitle= document.createElement("h3")
    cardTitle.textContent=accessingArrayObjectsTitle(mylibrary,bookNum) //this is to be changed to the object.title

    const cardAuthor= document.createElement("p")
    cardAuthor.textContent=accessingArrayObjectsAuthor(mylibrary,bookNum) // this is to be changed to the object.author

    const cardPages = document.createElement("p")
    cardPages.id="cardPages"
    cardPages.textContent= accessingArrayObjectsPages(mylibrary,bookNum) // this is to be changed to the object.pages

    const spanRead= document.createElement("span")
    

    deleteBtn= document.createElement("span")
    deleteBtn.id="deleteBtn"
    deleteBtn.innerHTML='<svg width="70px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 6.52381C3 6.12932 3.32671 5.80952 3.72973 5.80952H8.51787C8.52437 4.9683 8.61554 3.81504 9.45037 3.01668C10.1074 2.38839 11.0081 2 12 2C12.9919 2 13.8926 2.38839 14.5496 3.01668C15.3844 3.81504 15.4756 4.9683 15.4821 5.80952H20.2703C20.6733 5.80952 21 6.12932 21 6.52381C21 6.9183 20.6733 7.2381 20.2703 7.2381H3.72973C3.32671 7.2381 3 6.9183 3 6.52381Z" fill="#1C274C"></path> <path d="M11.6066 22H12.3935C15.101 22 16.4547 22 17.3349 21.1368C18.2151 20.2736 18.3052 18.8576 18.4853 16.0257L18.7448 11.9452C18.8425 10.4086 18.8913 9.64037 18.4498 9.15352C18.0082 8.66667 17.2625 8.66667 15.7712 8.66667H8.22884C6.7375 8.66667 5.99183 8.66667 5.55026 9.15352C5.1087 9.64037 5.15756 10.4086 5.25528 11.9452L5.51479 16.0257C5.69489 18.8576 5.78494 20.2736 6.66513 21.1368C7.54532 22 8.89906 22 11.6066 22Z" fill="#1C274C"></path> </g></svg>'
    deleteBtn.addEventListener("click", ()=> deleteCard(card.id));
    
    const svgNotRead= '<svg width="70px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2954 6.31083C22.6761 6.474 22.8524 6.91491 22.6893 7.29563L21.9999 7.00019C22.6893 7.29563 22.6894 7.29546 22.6893 7.29563L22.6886 7.29731L22.6875 7.2998L22.6843 7.30716L22.6736 7.33123C22.6646 7.35137 22.6518 7.37958 22.6352 7.41527C22.6019 7.48662 22.5533 7.58794 22.4888 7.71435C22.3599 7.967 22.1675 8.32087 21.9084 8.73666C21.4828 9.4197 20.8724 10.2778 20.0619 11.1304L21.0303 12.0987C21.3231 12.3916 21.3231 12.8665 21.0303 13.1594C20.7374 13.4523 20.2625 13.4523 19.9696 13.1594L18.969 12.1588C18.3093 12.7115 17.5528 13.2302 16.695 13.6564L17.6286 15.0912C17.8545 15.4383 17.7562 15.9029 17.409 16.1288C17.0618 16.3547 16.5972 16.2564 16.3713 15.9092L15.2821 14.2353C14.5028 14.4898 13.659 14.6628 12.7499 14.7248V16.5002C12.7499 16.9144 12.4141 17.2502 11.9999 17.2502C11.5857 17.2502 11.2499 16.9144 11.2499 16.5002V14.7248C10.3689 14.6647 9.54909 14.5004 8.78982 14.2586L7.71575 15.9093C7.48984 16.2565 7.02526 16.3548 6.67807 16.1289C6.33089 15.903 6.23257 15.4384 6.45847 15.0912L7.37089 13.689C6.5065 13.2668 5.74381 12.7504 5.07842 12.1984L4.11744 13.1594C3.82455 13.4523 3.34968 13.4523 3.05678 13.1594C2.76389 12.8665 2.76389 12.3917 3.05678 12.0988L3.98055 11.175C3.15599 10.3153 2.53525 9.44675 2.10277 8.75486C1.83984 8.33423 1.6446 7.97584 1.51388 7.71988C1.44848 7.59182 1.3991 7.48914 1.36537 7.41683C1.3485 7.38067 1.33553 7.35207 1.32641 7.33167L1.31562 7.30729L1.31238 7.29984L1.31129 7.29733L1.31088 7.29638C1.31081 7.2962 1.31056 7.29563 1.99992 7.00019L1.31088 7.29638C1.14772 6.91565 1.32376 6.474 1.70448 6.31083C2.08489 6.1478 2.52539 6.32374 2.68888 6.70381C2.68882 6.70368 2.68894 6.70394 2.68888 6.70381L2.68983 6.706L2.69591 6.71972C2.7018 6.73291 2.7114 6.7541 2.72472 6.78267C2.75139 6.83983 2.79296 6.92644 2.84976 7.03767C2.96345 7.26029 3.13762 7.58046 3.37472 7.95979C3.85033 8.72067 4.57157 9.70728 5.55561 10.6218C6.42151 11.4265 7.48259 12.1678 8.75165 12.656C9.70614 13.0232 10.7854 13.2502 11.9999 13.2502C13.2416 13.2502 14.342 13.013 15.3124 12.631C16.5738 12.1345 17.6277 11.3884 18.4866 10.5822C19.4562 9.67216 20.1668 8.69535 20.6354 7.9434C20.869 7.5685 21.0405 7.25246 21.1525 7.03286C21.2085 6.92315 21.2494 6.83776 21.2757 6.78144C21.2888 6.75328 21.2983 6.73242 21.3041 6.71943L21.31 6.70595L21.3106 6.70475C21.3105 6.70485 21.3106 6.70466 21.3106 6.70475M22.2954 6.31083C21.9147 6.14771 21.4738 6.32423 21.3106 6.70475L22.2954 6.31083ZM2.68888 6.70381C2.68882 6.70368 2.68894 6.70394 2.68888 6.70381V6.70381Z" fill="#1C274C"></path> </g></svg>'
    const svgRead= '<svg width="70px" height="70px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="#1C274C" stroke-width="1.5"></path> </g></svg>'
    
    
    if(bookRead.checked){
        
        spanRead.innerHTML=svgRead
        spanRead.id="span-svg-read"
        cardTitle.append(spanRead);
        cardPages.append(deleteBtn);
        card.append(cardTitle,cardAuthor,cardPages);
    }
    else {
        spanRead.innerHTML=svgNotRead;
        spanRead.id="span-svg-not-read"
        card.append(cardTitle,cardAuthor,cardPages);
        cardTitle.append(spanRead);
        cardPages.append(deleteBtn);
    }

    spanRead.addEventListener("click", ()=>toggleReadStatus(spanRead,spanRead.id,svgRead,svgNotRead));
    console.table(mylibrary);
}


function addingBooks(){
    let userInputTitle= bookTitle.value
    let userInputAuthor= bookAuthor.value
    let userInputPages= bookPages.value
    let bookCounter=i;
    const book= new Books(userInputTitle, userInputAuthor,userInputPages,bookCounter)
    mylibrary[i]= book;
    
    cardCreation(i);
    i++;
}

function deleteCard(cardId) {
  // Find the card div by its ID
  const cardDiv = document.getElementById(cardId);

  // Check if the card div exists
  if (cardDiv) {
    // Remove the card div from its parent container
    cardDiv.parentNode.removeChild(cardDiv);
  }
}

