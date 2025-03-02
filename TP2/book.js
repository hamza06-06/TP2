// Création de la classe Book
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // Méthode qui retourne les détails du livre
  getDetails() {
    return `Titre : ${this.title} / Auteur : ${this.author}`;
  }
}
