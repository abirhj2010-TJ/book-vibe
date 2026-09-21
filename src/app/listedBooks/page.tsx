"use client";

import { BooksContext } from "@/context/BooksProvider";
import React, { useContext, useState } from "react";
import ListedBooksCard from "@/components/ListedBooks/ListedBooksCard";
import { FaBookOpen, FaHeart } from "react-icons/fa";
import { Book } from "@/Types/bookType";

const ListedBooks = () => {
  const { readBooks, wishList } = useContext(BooksContext);

  const [sortBy, setSortBy] = useState<"rating" | "pages" | "year">("rating");

  const sort = (books: Book[]) => {
    const sortedBooks = [...books];

    if (sortBy === "rating") {
      sortedBooks.sort((a, b) => b.rating - a.rating);
    } else if (sortBy === "pages") {
      sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
    } else sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);

    return sortedBooks;
  };

  const sortedReadBooks: Book[] = sort(readBooks);

  const sortedWishlist: Book[] = sort(wishList);

  return (
    <section className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-emerald-500">
            Your Personal Library
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Books You Love, Stories You Keep
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Keep track of the books you have read and save the ones you want to
            explore next.
          </p>
        </div>

        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold text-gray-500">Sort by</span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value as "rating" | "pages" | "year")
              }
              className="h-11 min-w-48 cursor-pointer rounded-xl border border-gray-200 bg-white px-4 text-sm font-semibold text-gray-700 shadow-sm outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            >
              
              <option value={"rating"}>Rating</option>
              <option value={"pages"}>Number of Pages</option>
              <option value={"year"}>Published Year</option>
            </select>
          </div>
        </div>

        <div className="tabs tabs-lift w-full">
          <input
            type="radio"
            name="listed_books_tabs"
            className="tab text-sm font-semibold sm:text-base"
            aria-label={`Read Books (${readBooks.length})`}
            defaultChecked
          />

          <div className="tab-content rounded-b-xl border-base-300 bg-white p-4 sm:p-6">
            {readBooks.length === 0 ? (
              <div className="flex min-h-87.5 flex-col items-center justify-center px-4 text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                  <FaBookOpen className="text-3xl text-emerald-500" />
                </div>

                <h2 className="text-xl font-bold text-gray-800">
                  No Read Books Yet
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                  Start exploring our collection and mark the books you have
                  finished reading. They will appear here.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedReadBooks.map((book: Book) => (
                  <ListedBooksCard key={book.bookId} book={book} />
                ))}
              </div>
            )}
          </div>

          <input
            type="radio"
            name="listed_books_tabs"
            className="tab text-sm font-semibold sm:text-base"
            aria-label={`Wishlist (${wishList.length})`}
          />

          <div className="tab-content rounded-b-xl border-base-300 bg-white p-4 sm:p-6">
            {wishList.length === 0 ? (
              <div className="flex min-h-87.5 flex-col items-center justify-center px-4 text-center">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-50">
                  <FaHeart className="text-3xl text-emerald-500" />
                </div>

                <h2 className="text-xl font-bold text-gray-800">
                  Your Wishlist Is Empty
                </h2>

                <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                  Found something interesting? Add it to your wishlist and come
                  back whenever you are ready to read it.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {sortedWishlist.map((book: Book) => (
                  <ListedBooksCard key={book.bookId} book={book} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListedBooks;
