import React, { useEffect, useState } from "react";
import axios from "axios";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSearch } from "../Context/SearchContext";

function Freebook() {
  const [books, setBooks] = useState([]);
  const {search } = useSearch();
 const filteredBooks = books.filter(
   (book) =>
     (book.name || "").toLowerCase().includes((search || "").toLowerCase()),
   console.log(books),
 );
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/free-books");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  return (
    <div className="py-10">
      <div className="w-full px-6 py-10 md:px-16 lg:px-24">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
          Free Offered Books
        </h1>

        <p className="mt-4 text-lg text-gray-600 dark:text-slate-300 leading-8">
          Discover our collection of free books and start your learning journey
          with carefully selected books from different categories.
        </p>
      </div>

      <div className="px-6 md:px-16 lg:px-24">
        {filteredBooks.length === 0 ? (
          <div className="text-center py-10 text-gray-500 dark:text-slate-300">
            No books...
          </div>
        ) : (
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {filteredBooks.map((book) => (
              <SwiperSlide key={book.id}>
                <div className="hover-3d w-96 mx-auto py-10">
                  <div className="card bg-base-100 dark:bg-slate-950 shadow-xl rounded-2xl overflow-hidden">
                    <figure>
                      <img
                        src={book.image}
                        alt={book.name}
                        className="h-60 w-full object-cover"
                      />
                    </figure>

                    <div className="card-body">
                      <h2 className="card-title justify-between text-xl font-bold text-gray-900 dark:text-slate-100">
                        {book.name}

                        <span className="badge badge-secondary uppercase">
                          {book.category}
                        </span>
                      </h2>

                      <p className="text-gray-600 dark:text-slate-300 text-sm leading-6 line-clamp-2">
                        {book.title}
                      </p>

                      <div className="flex justify-between items-center mt-3">
                        <span className="text-2xl font-black text-red-600 dark:text-red-400">
                          {book.price}
                        </span>

                        <button className="btn btn-primary transition-transform duration-200 ease-in-out active:scale-95">
                          View Book
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Required for DaisyUI Hover 3D */}
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
}

export default Freebook;
