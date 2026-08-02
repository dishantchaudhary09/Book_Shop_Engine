import React from "react";
import Createaccount from "./Createaccount";

 function Login() {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <div
        onClick={() => document.getElementById("my_modal_3").showModal()}
      ></div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="w-full max-w-md mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white text-center">
              Welcome Back
            </h2>

            <p className="text-gray-400 text-center mt-2 mb-8">
              Login to continue your journey
            </p>

            <form className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full bg-white/10 border-white/10 text-black placeholder-gray-400 focus:border-primary focus:outline-none"
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-sm  text-primary hover:underline"
                  >
                    Forgot?
                  </a>
                </div>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="input text-black input-bordered w-full bg-white/10 border-white/10 placeholder-gray-400 focus:border-primary focus:outline-none"
                />
              </div>

              {/* Remember */}
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span className="text-gray-300">Remember me</span>
              </label>

              {/* Login Button */}
              <button className="btn btn-primary w-full rounded-xl text-base mt-2">
                Login
              </button>

              {/* Divider */}
              <div className="divider text-gray-500">OR</div>

              {/* Sign Up */}
              <p className="text-center text-gray-400">
                Don't have an account?
                <a
                  onClick={() => {
                    document.getElementById("my_modal_3")?.close();
                    document.getElementById("my_modal_4")?.showModal();
                  }}
                  className="text-primary cursor-pointer font-semibold ml-2 hover:underline"
                >
                  Create Account
                </a>
              </p>
            </form>
          </div>
        </div>
      </dialog>
      <Createaccount />
    </div>
  );
}

export default Login