// Création de la classe Library
class Library {
  constructor() {
    this.books = []; // Tableau pour stocker les livres
  }

  // Méthode pour ajouter un livre à la bibliothèque
  addBook(book) {
    this.books.push(book);
  }

  // Méthode pour lister tous les livres
  listBooks() {
    this.books.forEach(book => {
      console.log(book.getDetails());
    });
  }

  // Méthode pour rechercher un livre par titre
  findBookByTitle(title) {
    const book = this.books.find(book => book.title === title);
    if (book) {
      return book.getDetails();
    } else {
      return 'Livre non trouvé';
    }
  }
}
