'use client';
import { BooksContext } from '@/context/BooksProvider';
import { Book } from '@/Types/bookType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const ReadButton = ({book}:{book: Book}) => {

    const {readBooks, setReadBooks} = useContext(BooksContext);

    const handleReadBook = (book:Book) => {
        

        const isRead = readBooks.some(b => b.bookId === book.bookId);

        if(isRead)
        {
            toast.warning(`${book.bookName} is already read`);
            return;
        }

        setReadBooks([...readBooks, book]);
        toast.success(`${book.bookName} is read`)


    }

    return (
        <button onClick={() => handleReadBook(book)} className="btn rounded-lg border border-gray-300 bg-white px-6 text-gray-800 hover:bg-gray-100">
                Read
              </button>
    );
};

export default ReadButton;