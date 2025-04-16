import React from "react";
import Book from "../Book/Book";
function Books({ booksData }) {
  //   console.log(booksData);
  return (
    <div className="py-20 space-y-10">
      <h2 className="text-3xl font-bold text-teal-950 text-center">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {booksData.map((book) => (
          <Book key={book.bookId} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Books;
