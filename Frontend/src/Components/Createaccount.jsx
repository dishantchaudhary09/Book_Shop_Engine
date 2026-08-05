import React, { useState } from "react";
import api from "../Api/api.js";
import toast from "react-hot-toast";
function Createaccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const userInfo = {
      name: formData.name,
      email: formData.email,
      password: formData.confirmPassword,
    };

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await api.post(
       "/create-user/sign-up",
        userInfo,
      );

      // console.log(res.data);
      toast.success(res.data.Message);
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      document.getElementById("my_modal_4")?.close();
    } catch (err) {
      setError(err.response?.data?.Message || "Something went wrong");
    }
  };

  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-11/12 max-w-lg rounded-3xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(59,130,246,0.2)] p-8">
        {/* Close Button */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5 text-gray-400 hover:bg-slate-700 hover:text-white">
            ✕
          </button>
        </form>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Create Account</h2>
          <p className="text-gray-400 mt-2">
            Join us and start your journey today.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="input input-bordered w-full bg-slate-800/70 border-slate-700 text-white placeholder-gray-500 focus:border-cyan-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="input input-bordered w-full bg-slate-800/70 border-slate-700 text-white placeholder-gray-500 focus:border-cyan-400"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="input input-bordered w-full bg-slate-800/70 border-slate-700 text-white placeholder-gray-500 focus:border-cyan-400"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="••••••••"
              className="input input-bordered w-full bg-slate-800/70 border-slate-700 text-white placeholder-gray-500 focus:border-cyan-400"
              required
            />
          </div>

          {/* Error Alert */}
          {error && (
            <div className="alert alert-error">
              <span>{error}</span>
            </div>
          )}

          {/* Terms */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-info mt-1" />
            <span className="text-sm text-gray-400">
              I agree to the{" "}
              <a
                href="/term-condition"
                className="text-cyan-400 hover:underline"
              >
                Terms & Conditions
              </a>
            </span>
          </label>

          {/* Submit Button */}
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 border-0 rounded-xl text-white hover:scale-[1.02] transition-all duration-300"
          >
            Create Account
          </button>

          {/* Login Link */}
          <p
            className="text-center text-gray-400 cursor-pointer"
            onClick={() => {
              document.getElementById("my_modal_4")?.close();
              document.getElementById("my_modal_3")?.showModal();
            }}
          >
            Already have an account?
            <span className="text-cyan-400 ml-2 hover:underline">Login</span>
          </p>
        </form>
      </div>

      {/* Click outside to close */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Createaccount;
