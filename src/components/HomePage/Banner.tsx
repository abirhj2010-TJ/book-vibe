import Image from "next/image";
import React from "react";
import banner from "@/assets/hero_img.jpg";

const Banner = () => {
  return (
    <section className="mb-10 md:mb-20 lg:mb-30 px-4 sm:px-6 lg:px-20">
      <div className="relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 lg:gap-8 rounded-3xl bg-linear-to-br from-emerald-50 via-white to-green-100 px-6 py-10 sm:px-8 sm:py-12 md:px-8 md:py-14 lg:px-14 lg:py-16">

        <div className="absolute -top-20 -left-20 h-52 w-52 rounded-full bg-emerald-300/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-green-300/20 blur-3xl" />

        <div className="relative z-10 w-full md:w-[45%] flex flex-col items-center md:items-start gap-5 lg:gap-7 text-center md:text-left">
          <span className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
            Your next favorite book awaits
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900">
            Books to freshen up
            <br />
            your bookshelf
          </h1>

          <p className="max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed text-gray-600">
            Discover amazing books and build a collection that makes your
            bookshelf feel fresh, inspiring, and uniquely yours.
          </p>

          <button className="btn border-0 bg-emerald-600 px-7 text-white shadow-lg shadow-emerald-600/20 hover:bg-emerald-700">
            View The List
          </button>
        </div>

        <div className="relative z-10 w-full md:w-[55%] flex justify-center">
          <div className="relative w-full flex justify-center">
            <div className="absolute inset-5 rounded-3xl bg-emerald-400/20 blur-2xl" />

            <Image
              src={banner}
              alt="Bookshelf banner"
              priority
              className="relative w-full max-w-100 sm:max-w-120 md:max-w-125 lg:max-w-155 rounded-3xl object-contain shadow-2xl"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Banner;