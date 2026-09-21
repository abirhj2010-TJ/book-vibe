import ReadButton from "@/components/BookDetails/ReadButton";
import WishListButton from "@/components/BookDetails/WishListButton";
import { Book } from "@/Types/bookType";
import Image from "next/image";
import React from "react";

interface BookDetailsProps {
  params: Promise<{ bookId: string }>;
}

const BookDetails = async ({ params }: BookDetailsProps) => {
  const { bookId } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/booksData.json`);
  const books: Book[] = await res.json();

  const book: Book | undefined = books.find((book) => book.bookId === Number(bookId));

  if (!book) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-700">Book not found</h1>
      </div>
    );
  }

  return (
    <section className="px-4 py-8 sm:px-6 lg:px-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[360px_1fr] lg:grid-cols-[420px_1fr] lg:gap-9">
          <div className="flex items-center justify-center rounded-xl bg-gray-100 p-8">
            <Image
              src={book.image}
              alt={book.bookName}
              width={420}
              height={560}
              priority
              className="h-120 w-auto object-contain"
            />
          </div>

          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {book.bookName}
            </h1>

            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              By : <span className="font-semibold">{book.author}</span>
            </p>

            <div className="my-4 h-px bg-gray-200" />

            <p className="text-sm font-medium text-gray-700">
              {book.category}
            </p>

            <div className="my-4 h-px bg-gray-200" />

            <p className="text-sm leading-6 text-gray-500">
              <span className="font-bold text-gray-800">Review : </span>
              {book.review}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="text-sm font-bold text-gray-800">Tag</span>

              <div className="flex flex-wrap gap-2">
                {book.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="my-5 h-px bg-gray-200" />

            <div className="space-y-3 text-sm">
              <div className="grid grid-cols-[150px_1fr]">
                <span className="text-gray-500">Number of Pages:</span>
                <span className="font-semibold text-gray-800">
                  {book.totalPages}
                </span>
              </div>

              <div className="grid grid-cols-[150px_1fr]">
                <span className="text-gray-500">Publisher:</span>
                <span className="font-semibold text-gray-800">
                  {book.publisher}
                </span>
              </div>

              <div className="grid grid-cols-[150px_1fr]">
                <span className="text-gray-500">Year of Publishing:</span>
                <span className="font-semibold text-gray-800">
                  {book.yearOfPublishing}
                </span>
              </div>

              <div className="grid grid-cols-[150px_1fr]">
                <span className="text-gray-500">Rating:</span>
                <span className="font-semibold text-gray-800">
                  {book.rating}
                </span>
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <ReadButton book = {book}></ReadButton>

              <WishListButton book = {book}></WishListButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;