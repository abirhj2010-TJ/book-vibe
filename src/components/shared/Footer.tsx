import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/book.ico";
import { FaFacebookF, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-20 bg-gray-950 text-gray-300">
      <div className="px-4 py-14 sm:px-6 lg:px-20">
        <div>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div>
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="Book Vibe"
                  width={40}
                  height={40}
                  className="h-9 w-9 rounded-lg"
                />

                <h2 className="text-2xl font-bold text-white">
                  Book <span className="text-emerald-500">Vibe</span>
                </h2>
              </div>

              <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
                Discover amazing stories, explore timeless classics, and find
                your next favorite book with Book Vibe.
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-emerald-600 hover:text-white"
                >
                  <FaFacebookF size={14} />
                </Link>

                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-emerald-600 hover:text-white"
                >
                  <FaInstagram size={14} />
                </Link>

                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-emerald-600 hover:text-white"
                >
                  <FaTwitter size={14} />
                </Link>

                <Link
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition hover:bg-emerald-600 hover:text-white"
                >
                  <FaGithub size={14} />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-white">Explore</h3>

              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link href="/" className="transition hover:text-emerald-500">
                    Home
                  </Link>
                </li>

                <li>
                  <Link
                    href="/books"
                    className="transition hover:text-emerald-500"
                  >
                    Listed Books
                  </Link>
                </li>

                <li>
                  <Link
                    href="/pages-to-read"
                    className="transition hover:text-emerald-500"
                  >
                    Pages to Read
                  </Link>
                </li>

                <li>
                  <Link
                    href="/wishlist"
                    className="transition hover:text-emerald-500"
                  >
                    Wishlist
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white">Categories</h3>

              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <Link
                    href="/books?category=fiction"
                    className="transition hover:text-emerald-500"
                  >
                    Fiction
                  </Link>
                </li>

                <li>
                  <Link
                    href="/books?category=romance"
                    className="transition hover:text-emerald-500"
                  >
                    Romance
                  </Link>
                </li>

                <li>
                  <Link
                    href="/books?category=classic"
                    className="transition hover:text-emerald-500"
                  >
                    Classic
                  </Link>
                </li>

                <li>
                  <Link
                    href="/books?category=mystery"
                    className="transition hover:text-emerald-500"
                  >
                    Mystery
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white">Stay Updated</h3>

              <p className="mt-5 text-sm leading-6 text-gray-400">
                Get updates about new books and exciting reads.
              </p>

              <div className="mt-4 flex overflow-hidden rounded-xl bg-gray-800 p-1">
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white outline-none placeholder:text-gray-500"
                />

                <button className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700">
                  Join
                </button>
              </div>
            </div>
          </div>

          <div className="my-10 h-px bg-gray-800" />

          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-gray-500 sm:flex-row sm:text-left">
            <p>© {new Date().getFullYear()} Book Vibe. All rights reserved.</p>

            <div className="flex gap-5">
              <Link
                href="/privacy"
                className="transition hover:text-emerald-500"
              >
                Privacy Policy
              </Link>

              <Link href="/terms" className="transition hover:text-emerald-500">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
