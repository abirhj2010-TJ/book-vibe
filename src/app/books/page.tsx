import React from "react";
import { Book } from "@/Types/bookType";
import BookCard from "@/components/HomePage/BookCard";

const getBooks = async () => {
  const res = await fetch("http://localhost:3000/booksData.json");
  const data = await res.json();

  return data;
};

const Books = async () => {
  const books = await getBooks();
  return (
    <section className="px-4 sm:px-6 lg:px-20">
      <div className="mb-15 text-center">
        <h2 className="text-4xl font-bold">Explore All Books</h2>

        <p className="mt-2 text-sm font-semibold text-gray-400 sm:text-base">
          Find your next favorite book and explore stories worth reading.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book: Book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>
    </section>
  );
};

export default Books;
