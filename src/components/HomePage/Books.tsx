import React from "react";
import { Book } from "@/Types/bookType";
import BooksList from "@/components/HomePage/BooksList";

const getBooks = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);

    if (!res.ok) {
      throw new Error("Failed to fetch books");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching books:", error);
    return [] as Book[];
  }
};

const Books = async () => {
  const books: Book[] = await getBooks();

  return (
    <section className="my-4 px-4 sm:px-6 md:my-7 lg:my-10 lg:px-20">
      <div className="my-15 text-center">
        <h2 className="text-4xl font-bold">Explore The Books</h2>

        <p className="mt-2 text-sm font-semibold text-gray-400 sm:text-base">
          Find your next favorite book and explore stories worth reading.
        </p>
      </div>

      <BooksList books={books} />
    </section>
  );
};

export default Books;