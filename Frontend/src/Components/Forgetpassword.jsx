import React, { useState } from "react";
import api from "../Api/api.js";
import { toast } from "react-hot-toast";
import api from "../Api/api.js";

function ForgotPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post(
        "/create-user/forgot-password",
        { email },
      );

      toast.success(res.data.Message);

      setEmail("");

      document.getElementById("forgot_modal")?.close();
    } catch (error) {
      toast.error(error.response?.data?.Message || "Something went wrong");
    }
  };

  return (
    <dialog id="forgot_modal" className="modal">
      <div className="modal-box w-11/12 max-w-lg rounded-3xl border border-cyan-500/20 bg-slate-900/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(59,130,246,0.2)] p-8">
        {/* Close */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5 text-gray-400 hover:bg-slate-700 hover:text-white">
            ✕
          </button>
        </form>

        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white">Forgot Password</h2>

          <p className="text-gray-400 mt-2">
            Enter your registered email to reset your password.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="john@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered w-full bg-slate-800/70 border-slate-700 text-white placeholder-gray-500 focus:border-cyan-400"
              required
            />
          </div>

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 border-0 rounded-xl text-white hover:scale-[1.02] transition-all duration-300"
          >
            Send Reset Link
          </button>

          <p
            className="text-center text-gray-400 cursor-pointer"
            onClick={() => {
              document.getElementById("forgot_modal")?.close();
              document.getElementById("my_modal_3")?.showModal();
            }}
          >
            Remember your password?
            <span className="text-cyan-400 ml-2 hover:underline">Login</span>
          </p>
        </form>
      </div>

      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default ForgotPassword;
