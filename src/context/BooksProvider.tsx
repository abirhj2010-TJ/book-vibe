"use client";

import React, { createContext, useState } from "react";
import { Book } from "@/Types/bookType";

interface BooksContextType {
  readBooks: Book[];
  setReadBooks: React.Dispatch<React.SetStateAction<Book[]>>;
  wishList: Book[];
  setWishList: React.Dispatch<React.SetStateAction<Book[]>>;
}

export const BooksContext = createContext<BooksContextType>({
  readBooks: [],
  setReadBooks: () => {},
  wishList: [],
  setWishList: () => {},
});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [readBooks, setReadBooks] = useState<Book[]>([]);
  const [wishList, setWishList] = useState<Book[]>([]);

  const sharedData = {
    readBooks,
    setReadBooks,
    wishList,
    setWishList,
  };

  return (
    <BooksContext.Provider value={sharedData}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksProvider;