import React from "react";

function Banner() {
  return (
    <>
      <div className="container gap-10 pt-20 mb-[-8%] md:gap-20 lg:gap-40 xl:gap-80 mt-12 max-w-screen-2xl mx-auto px-4 md:px-20 flex flex-col md:flex-row md:mt-30 bg-white dark:bg-slate-950 rounded-3xl shadow-sm dark:shadow-none">
        <div className="w-full md:w-[50%] order-2 md:order-1">
          <div className="space-y-12 ">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
              Hello, welcomes here to learn
              <br />
              something{" "}
              <span className="text-pink-500 dark:text-pink-300">
                new everyday!!!
              </span>
            </h1>
            <p className="text-xl text-slate-700 dark:text-slate-300">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              eius facilis expedita? Itaque accusamus deleniti sapiente quia
              beatae ipsam libero!
            </p>
            <label className="input validator bg-white text-slate-900 dark:bg-slate-800 dark:text-slate-100">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
          </div>
          <button className="btn btn-secondary mt-4">Secondary</button>
        </div>
        <div className="w-full mt-[-2%] md:w-[50%] order-1 md:order-2">
          <img className="h-[70%]" src="./Hero.png" alt="Image" />
        </div>
      </div>
    </>
  );
}

export default Banner;
