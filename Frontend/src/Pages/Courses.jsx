import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSearch } from "../Context/SearchContext.jsx";

function Courses() {
 
  const [paid, setPaid] = useState([]);
  const { search } = useSearch();
  const filteredBooks = paid.filter(
    (book) =>
      (book.name || "").toLowerCase().includes((search || "").toLowerCase()),
    // console.log(books),
  );
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:5000/paid-books");
        console.log(res.data);
        setPaid(res.data)
      } catch (error) {
        console.log(error);
        }
    }
    getBook();

  }, []);

  return (
    <div>
      <Navbar />
      <div className="pt-28 px-16 flex flex-col items-center gap-6 bg-base-100 dark:bg-slate-950 min-h-screen">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100 text-center">
          We're delighted to have you here :)
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-slate-300 leading-8 text-justify max-w-8xl">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam optio
          itaque harum quae numquam aspernatur velit ducimus perferendis
          praesentium ad, dignissimos exercitationem sed nihil odio recusandae,
          tempore quibusdam cupiditate dolore. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Nam optio itaque harum quae numquam
          aspernatur velit ducimus perferendis praesentium ad, dignissimos
          exercitationem sed nihil odio recusandae, tempore quibusdam cupiditate
          dolore.
        </p>
        <button className="btn btn-secondary mt-4">
          <a href="/">Home</a>
        </button>

        <div className="w-full px-6 md:px-16 lg:px-24">
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
              {paid.length === 0 ? (
                <div className="text-center py-10 text-gray-500 dark:text-slate-300">
                  Loading courses...
                </div>
              ) : (
                filteredBooks.map((course) => (
                  <SwiperSlide key={course.id}>
                    <div className="hover-3d w-96 mx-auto py-10">
                      <div className="card bg-base-100 dark:bg-slate-950 shadow-xl rounded-2xl overflow-hidden">
                        <figure>
                          <img
                            src={course.image}
                            alt={course.name}
                            className="h-60 w-full object-cover"
                          />
                        </figure>
                        <div className="card-body">
                          <h2 className="card-title justify-between text-xl font-bold text-gray-900 dark:text-slate-100">
                            {course.name}
                            <span className="badge badge-secondary uppercase">
                              {course.category}
                            </span>
                          </h2>
                          <p className="text-gray-600 dark:text-slate-300 text-sm leading-6 line-clamp-2">
                            {course.title}
                          </p>
                          <div className="flex justify-between items-center mt-3">
                            <span className="text-2xl font-black text-red-600">
                              {course.price}
                            </span>
                            <button className="btn btn-primary transition-transform duration-200 ease-in-out active:scale-95 ">
                              Buy Now
                            </button>
                          </div>
                        </div>
                      </div>
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
                ))
              )}
            </Swiper>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Courses;
