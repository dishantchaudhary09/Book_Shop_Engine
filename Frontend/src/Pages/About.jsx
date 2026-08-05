import React from "react";
import {
  FaBookOpen,
  FaUsers,
  FaShippingFast,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/Authprovider";


const features = [
  {
    icon: <FaBookOpen size={35} />,
    title: "Huge Collection",
    desc: "Explore thousands of books across Fiction, Programming, Business, Self-Help, and more.",
  },
  {
    icon: <FaShippingFast size={35} />,
    title: "Fast Delivery",
    desc: "Quick and reliable delivery to your doorstep with secure packaging.",
  },
  {
    icon: <FaShieldAlt size={35} />,
    title: "Secure Shopping",
    desc: "Your payments and personal information are protected with modern security.",
  },
];

const stats = [
  { number: "10K+", label: "Books Available" },
  { number: "5K+", label: "Happy Readers" },
  { number: "50+", label: "Categories" },
  { number: "99%", label: "Customer Satisfaction" },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    review:
      "The website is clean, easy to use, and has an amazing collection of books.",
  },
  {
    name: "Priya Singh",
    review: "I found all the programming books I needed. Highly recommended!",
  },
  {
    name: "Aman Verma",
    review: "Great experience with fast delivery and affordable prices.",
  },
];

const About = () => {
  const [authUser] = useAuth();

  const handleBrowseBooks = (e) => {
    if (!authUser) {
      e.preventDefault();
      document.getElementById("my_modal_3")?.showModal();
    }
  };
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100">
            About{" "}
            <span className="text-cyan-600 dark:text-cyan-300">Book Store</span>
          </h1>

          <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-3xl mx-auto text-lg">
            Discover thousands of books from every category. Whether you're
            learning a new skill or reading for fun, we help you find the
            perfect book for your journey.
          </p>

          <button className="btn mt-10 bg-gradient-to-r from-cyan-500 to-blue-600 border-0 rounded-xl text-white">
            <a href="/"> Explore Books</a>
          </button>
        </section>

        {/* Our Story */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          <div className="rounded-3xl bg-white dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/10 dark:border-slate-700/40 p-10 shadow-sm">
            <h2 className="text-4xl font-bold mb-6 text-cyan-600 dark:text-cyan-300">
              Our Story
            </h2>

            <p className="text-slate-700 dark:text-slate-300 leading-8 text-lg">
              Our Book Store was created with one mission — to make quality
              books accessible to everyone. We believe books inspire creativity,
              improve knowledge, and help people achieve their dreams. From
              students to professionals, our platform serves readers from all
              backgrounds.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200/10 dark:border-slate-700/40 backdrop-blur-xl p-8 hover:-translate-y-2 transition duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]"
              >
                <div className="text-cyan-600 dark:text-cyan-300 mb-5">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
                  {item.title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200/10 dark:border-slate-700/40 backdrop-blur-xl p-8 text-center"
              >
                <h3 className="text-4xl font-bold text-cyan-600 dark:text-cyan-300">
                  {item.number}
                </h3>

                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900 dark:text-slate-100">
            What Readers Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="rounded-3xl bg-white dark:bg-slate-900/70 border border-slate-200/10 dark:border-slate-700/40 backdrop-blur-xl p-8"
              >
                <div className="flex text-yellow-400 mb-4">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>

                <p className="text-slate-700 dark:text-slate-300">
                  "{item.review}"
                </p>

                <h4 className="mt-6 text-cyan-600 dark:text-cyan-300 font-semibold">
                  {item.name}
                </h4>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-6xl mx-auto px-6 py-20">
          <div className="rounded-3xl bg-gradient-to-r from-cyan-600 to-blue-700 p-12 text-center shadow-lg">
            <h2 className="text-4xl font-bold text-white">
              Start Your Reading Journey Today
            </h2>

            <p className="mt-4 text-lg text-cyan-100">
              Explore thousands of books and find your next favorite read.
            </p>

            <button className="btn mt-8 bg-white text-slate-900 border-0 hover:bg-slate-200 rounded-xl">
              <NavLink to="/courses" onClick={handleBrowseBooks}>
                Browse Books
              </NavLink>
            </button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default About;
