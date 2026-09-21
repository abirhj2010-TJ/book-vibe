"use client";

import React, { useState } from "react";
import { Book } from "@/Types/bookType";
import BookCard from "./BookCard";

interface BooksListProps {
  books: Book[];
}

const BooksList = ({ books }: BooksListProps) => {
  const [showAll, setShowAll] = useState(false);

  const displayedBooks = showAll ? books : books.slice(0, 4);

  return (
    <>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {displayedBooks.map((book) => (
          <BookCard key={book.bookId} book={book} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={() => setShowAll(!showAll)}
          className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600"
        >
          {showAll ? "Show Less" : "Show All Books"}
        </button>
      </div>
    </>
  );
};

export default BooksList;