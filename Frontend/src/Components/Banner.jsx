import React from "react";

function Banner() {
  return (
    <div
      className="container max-w-screen-2xl mx-auto px-4 sm:px-8 lg:px-20 
      pt-12 md:pt-20 mt-8 md:mt-12 
      flex flex-col md:flex-row items-center 
      gap-10 md:gap-12 lg:gap-20
      bg-white dark:bg-slate-950 
      rounded-3xl shadow-sm dark:shadow-none"
    >
      {/* Left Content */}
      <div className="w-full md:w-1/2 order-2 md:order-1">
        <div className="space-y-6 md:space-y-8">
          <h1
            className="text-3xl sm:text-4xl lg:text-5xl 
            font-bold leading-tight 
            text-slate-900 dark:text-slate-100"
          >
            Hello, welcomes here to learn
            <br />
            something{" "}
            <span className="text-pink-500 dark:text-pink-300">
              new everyday!!!
            </span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl 
            text-slate-700 dark:text-slate-300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio eius
            facilis expedita? Itaque accusamus deleniti sapiente quia beatae
            ipsam libero!
          </p>

          <label
            className="input validator 
            w-full sm:w-[80%]
            bg-white text-slate-900 
            dark:bg-slate-800 dark:text-slate-100"
          >
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
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </g>
            </svg>

            <input type="email" placeholder="mail@site.com" required />
          </label>

          <button className="btn btn-secondary mt-2">Secondary</button>
        </div>
      </div>

      {/* Right Image */}
      <div
        className="w-full md:w-1/2 
        order-1 md:order-2 
        flex justify-center"
      >
        <img
          className="w-[80%] sm:w-[70%] md:w-full 
          max-w-lg object-contain"
          src="./Hero.png"
          alt="Hero"
        />
      </div>
    </div>
  );
}

export default Banner;
