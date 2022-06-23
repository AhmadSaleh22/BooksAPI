exports.Book = class Book {
  constructor(isbn, title, author, description, publisher, pages) {
    this.isbn = isbn;
    this.title = title;
    this.description = description;
    this.author = author;
    this.publisher = publisher;
    this.pages = pages;
  }
};
