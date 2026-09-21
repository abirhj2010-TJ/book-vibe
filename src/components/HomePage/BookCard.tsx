import { Book } from "@/Types/bookType";
import Image from "next/image";
import Link from "next/link";

export interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="group rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-64 items-center justify-center rounded-xl bg-gray-100 p-5">
        <Image
          src={book.image}
          alt={book.bookName}
          width={180}
          height={240}
          className="h-full w-auto rounded-lg object-contain shadow-md"
        />
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-2">
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
            {book.category}
          </span>

          <div className="flex items-center gap-1 text-sm font-semibold text-gray-700">
            <span className="text-yellow-500">★</span>
            {book.rating}
          </div>
        </div>

        <h2 className="mt-3 line-clamp-1 text-xl font-bold text-gray-900">
          {book.bookName}
        </h2>

        <p className="mt-1 text-sm text-gray-500">By {book.author}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {book.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-gray-200 px-3 py-1 text-xs text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        <Link href={`/books/${book.bookId}`}>
          <button className="btn mt-5 w-full rounded-lg border-0 bg-emerald-600 text-white hover:bg-emerald-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
