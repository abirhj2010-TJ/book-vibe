'use client';

import { BooksContext } from '@/context/BooksProvider';
import { Book } from '@/Types/bookType';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const WishListButton = ({book}: {book:Book}) => {

    const {wishList, setWishList} = useContext(BooksContext);
    
        const handleWishList = (book:Book) => {
            const isWishListed = wishList.some(b => b.bookId === book.bookId);

            if(isWishListed)
            {
                toast.warning(`${book.bookName} is already in wishlist`);
                return;
            }

            setWishList([...wishList, book]);
            toast.success(`${book.bookName} is added to wishlist`);
        }
    
    return <button onClick={() => handleWishList(book)} className="btn rounded-lg border-0 bg-emerald-500 px-6 text-white hover:bg-emerald-600">
                Wishlist
              </button>;
};

export default WishListButton;