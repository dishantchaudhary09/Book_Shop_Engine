import React, { useEffect, useState } from "react";
import api from "../Api/api.js";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useSearch } from "../Context/SearchContext";

function Freebook() {
  const [books, setBooks] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [loading, setLoading] = useState(true);

  const { search } = useSearch();

  const filteredBooks = books.filter((book) =>
    (book.name || "").toLowerCase().includes((search || "").toLowerCase()),
  );

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await api.get("/free-books");

        console.log("free-books response", res.data);

        setBooks(res.data);
      } catch (error) {
        console.log(error.response?.data || error.message);

        setFetchError("Unable to fetch free books");
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="py-10">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 py-8">
        <h1
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold 
        text-slate-900 dark:text-slate-100"
        >
          Free Offered Books
        </h1>

        <p
          className="mt-4 text-base sm:text-lg 
        text-gray-600 dark:text-slate-300"
        >
          Discover our collection of free books and start your learning journey
          with carefully selected books from different categories.
        </p>
      </div>

      <div className="px-4 sm:px-8 md:px-16 lg:px-24">
        {loading && <div className="text-center py-10">Loading books...</div>}

        {fetchError && (
          <div className="text-center py-10 text-red-500">{fetchError}</div>
        )}

        {!loading && !fetchError && filteredBooks.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No books found...
          </div>
        )}

        {!loading && filteredBooks.length > 0 && (
          <Swiper
            modules={[Pagination, Navigation, Autoplay]}
            spaceBetween={15}
            navigation
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },

              640: {
                slidesPerView: 1.2,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },

              1280: {
                slidesPerView: 4,
              },
            }}
          >
            {filteredBooks.map((book) => (
              <SwiperSlide key={book._id || book.id}>
                <div className="hover-3d w-full max-w-sm mx-auto py-8">
                  <div
                    className="
                card 
                bg-base-100 
                dark:bg-slate-950 
                shadow-xl 
                rounded-2xl 
                overflow-hidden
                "
                  >
                    <figure>
                      <img
                        src={book.image}
                        alt={book.name}
                        className="
                      h-60
                      w-full
                      object-cover
                      "
                      />
                    </figure>

                    <div className="card-body">
                      <h2
                        className="
                    card-title 
                    text-lg 
                    font-bold
                    text-gray-900 
                    dark:text-slate-100
                    "
                      >
                        {book.name}
                      </h2>

                      <span className="badge badge-secondary uppercase">
                        {book.category}
                      </span>

                      <p
                        className="
                    text-gray-600 
                    dark:text-slate-300 
                    text-sm
                    line-clamp-2
                    "
                      >
                        {book.title}
                      </p>

                      <div
                        className="
                    flex 
                    justify-between 
                    items-center
                    mt-3
                    "
                      >
                        <span
                          className="
                      text-xl 
                      font-black 
                      text-red-600
                      "
                        >
                          {book.price}
                        </span>

                        <button
                          className="
                      btn 
                      btn-primary
                      active:scale-95
                      "
                        >
                          View Book
                        </button>
                      </div>
                    </div>
                  </div>
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
