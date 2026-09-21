import Image from "next/image";
import React from "react";
import logo from "@/assets/book.ico";
import Link from "next/link";

const Navbar = () => {
  const links = (
    <>
      <li>
        <Link href={'/'} className="rounded-lg font-medium hover:bg-emerald-50 hover:text-emerald-600">
          Home
        </Link>
      </li>
      <li>
        <Link href={'/listedBooks'} className="rounded-lg font-medium hover:bg-emerald-50 hover:text-emerald-600">
          Listed Books
        </Link>
      </li>
      <li>
        <Link href={'/pagesRead'} className="rounded-lg font-medium hover:bg-emerald-50 hover:text-emerald-600">
          Pages to Read
        </Link>
      </li>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 mb-10 border-b border-gray-100 bg-white/80 px-2 shadow-sm backdrop-blur-lg sm:px-4 lg:px-20">
      <div className="navbar container mx-auto min-h-16 px-0 sm:min-h-20">
        <div className="navbar-start min-w-0">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost mr-1 p-1.5 sm:mr-2 sm:p-2 lg:hidden"
            >
              <svg
                aria-label="Menu"
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content z-50 mt-3 w-52 rounded-2xl border border-gray-100 bg-white p-3 shadow-xl"
            >
              {links}
            </ul>
          </div>

          <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
            <Image
              src={logo}
              alt="Book Vibe"
              width={36}
              height={36}
              className="h-8 w-8 rounded-lg sm:h-10 sm:w-10"
            />

            <a className="whitespace-nowrap text-base font-bold tracking-tight text-gray-900 sm:text-xl md:text-2xl">
              Book <span className="text-emerald-600">Vibe</span>
            </a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            {links}
          </ul>
        </div>

        <div className="navbar-end ml-2 gap-1.5 sm:gap-2">
          <button className="btn h-9 min-h-9 border-0 bg-transparent px-2 text-xs text-gray-700 shadow-none hover:bg-emerald-50 hover:rounded-lg hover:text-emerald-600 sm:h-10 sm:min-h-10 sm:px-3 sm:text-sm">
            Sign In
          </button>

          <button className="btn h-9 min-h-9 rounded-lg border-0 bg-emerald-600 px-3 text-xs text-white shadow-md shadow-emerald-600/20 hover:bg-emerald-700 sm:h-10 sm:min-h-10 sm:rounded-xl sm:px-4 sm:text-sm">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;