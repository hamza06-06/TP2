import { Books } from "./livres.js";
import { Library } from "./gestionBiblio.js";

const x = new Books("test", "fdsfs");

x.getDetails();

const y= new Books("hihi","hohohohohoh");
y.getDetails();

const a= new Books("kokola","tytytyty");
a.getDetails();
const library = new Library();

document.getElementById('book-form').addEventListener('submit', function(event){
    event.preventDefault();
})

const titre = document.getElementById('title').Value;
const auteur = document.getElementById('author').Value;

  const newBook = new Books(titre, auteur);

  library.addBook(newBook);

  library.listBooks();



