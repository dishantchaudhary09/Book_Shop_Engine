import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 dark:text-slate-100">
            <span className="text-cyan-500 dark:text-cyan-300">Contact Us</span>
          </h1>

          <p className="text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto text-lg">
            Have a question, suggestion, or need help? We'd love to hear from
            you. Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </section>

        {/* Contact Section */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left */}
            <div className="rounded-3xl bg-white dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/10 dark:border-slate-700/40 p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-8 text-cyan-600 dark:text-cyan-300">
                Get In Touch
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="text-cyan-400 text-2xl">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                      Address
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400">
                      Lucknow, Uttar Pradesh, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="text-cyan-400 text-2xl">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                      Email
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400">
                      support@bookstore.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="text-cyan-400 text-2xl">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                      Phone
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="text-cyan-400 text-2xl">
                    <FaClock />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                      Working Hours
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400">
                      Monday - Saturday
                      <br />
                      9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-5">Follow Us</h3>

                <div className="flex gap-5">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-cyan-500 transition"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="rounded-3xl bg-white dark:bg-slate-900/70 backdrop-blur-xl border border-slate-200/10 dark:border-slate-700/40 p-8 shadow-sm">
              <h2 className="text-3xl font-bold mb-8 text-cyan-600 dark:text-cyan-300">
                Send a Message
              </h2>

              <form className="space-y-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="input input-bordered w-full bg-slate-100 border-slate-300 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="input input-bordered w-full bg-slate-100 border-slate-300 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100"
                />

                <input
                  type="text"
                  placeholder="Subject"
                  className="input input-bordered w-full bg-slate-100 border-slate-300 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100"
                />

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="textarea textarea-bordered w-full bg-slate-100 border-slate-300 text-slate-900 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-100"
                ></textarea>

                <button className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 border-0 rounded-xl hover:scale-[1.02] transition-all duration-300 text-white">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="rounded-3xl overflow-hidden border border-slate-200/10 dark:border-slate-700/40">
            <iframe
              title="Location"
              src="https://www.google.com/maps?q=Lucknow&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              className="border-0"
            ></iframe>
          </div>
        </section>

        {/* FAQ */}
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <h2 className="text-4xl font-bold text-center mb-10 text-slate-900 dark:text-slate-100">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            <div className="collapse collapse-plus bg-slate-100/80 dark:bg-slate-900/70 border border-slate-200/20 dark:border-slate-700/40">
              <input type="radio" name="faq" defaultChecked />
              <div className="collapse-title font-semibold text-slate-900 dark:text-slate-100">
                How long does delivery take?
              </div>
              <div className="collapse-content text-slate-600 dark:text-slate-400">
                Usually within 3–7 business days depending on your location.
              </div>
            </div>

            <div className="collapse collapse-plus bg-slate-100/80 dark:bg-slate-900/70 border border-slate-200/20 dark:border-slate-700/40">
              <input type="radio" name="faq" />
              <div className="collapse-title font-semibold text-slate-900 dark:text-slate-100">
                Can I return a book?
              </div>
              <div className="collapse-content text-slate-600 dark:text-slate-400">
                Yes. You can request a return according to our return policy.
              </div>
            </div>

            <div className="collapse collapse-plus bg-slate-100/80 dark:bg-slate-900/70 border border-slate-200/20 dark:border-slate-700/40">
              <input type="radio" name="faq" />
              <div className="collapse-title font-semibold text-slate-900 dark:text-slate-100">
                Is online payment secure?
              </div>
              <div className="collapse-content text-slate-600 dark:text-slate-400">
                Absolutely. We use secure payment gateways to protect your
                transactions.
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
