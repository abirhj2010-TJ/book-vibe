import { Book } from "@/Types/bookType";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

interface ListedBooksCardProps {
  book: Book;
}

const ListedBooksCard = ({ book }: ListedBooksCardProps) => {
  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:flex-row sm:p-5">
      <div className="flex h-56 w-full shrink-0 items-center justify-center rounded-xl bg-gray-100 p-5 sm:h-52 sm:w-40">
        <Image
          src={book.image}
          alt={book.bookName}
          width={160}
          height={210}
          className="h-full w-auto object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
              {book.category}
            </span>

            <span className="flex items-center gap-1 rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-600">
              <FaStar />
              {book.rating}
            </span>
          </div>

          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            {book.bookName}
          </h2>

          <p className="mt-1 text-sm font-medium text-gray-500">
            By <span className="text-gray-700">{book.author}</span>
          </p>

          <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-500">
            {book.review}
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-end justify-between gap-4 border-t border-gray-100 pt-4">
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
            <div>
              <p className="text-xs text-gray-400">Pages</p>
              <p className="mt-1 font-semibold text-gray-700">
                {book.totalPages}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Publisher</p>
              <p className="mt-1 font-semibold text-gray-700">
                {book.publisher}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Published</p>
              <p className="mt-1 font-semibold text-gray-700">
                {book.yearOfPublishing}
              </p>
            </div>

            <div>
              <p className="text-xs text-gray-400">Rating</p>
              <p className="mt-1 font-semibold text-gray-700">
                {book.rating}/5
              </p>
            </div>
          </div>

          <Link
            href={`/books/${book.bookId}`}
            className="btn rounded-lg border-0 bg-emerald-500 px-5 text-white hover:bg-emerald-600"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBooksCard;