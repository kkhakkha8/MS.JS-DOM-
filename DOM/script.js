// Document Object Model (DOM CRUD)

// <div>Welcome to Myanmar</div>

const h1Element = document.createElement('h1'); // <div></div>
const textNode = document.createTextNode("Welcome to Yangon");
h1Element.appendChild(textNode);

// place script tag under body tag
const tagCollections = document.getElementsByTagName('body'); 
const bodyElement = tagCollections[0];
bodyElement.appendChild(h1Element);

// Read 

const readH1Element = document.getElementsByTagName('h1')[0];
console.log("Text inside h1 element is " , readH1Element.textContent);

// Update

readH1Element.textContent = "Welcome to Mandalay";
console.log("Update text inside h1 now is ", readH1Element.textContent);

// Delete

const h1Element = document.getElementsByTagName("h1")[0];
h1Element.remove


