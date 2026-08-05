import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Createaccount from "./Createaccount.jsx";
import { useAuth } from "../Context/Authprovider";
import toast, { Toaster } from "react-hot-toast";
import ForgotPassword from "./Forgetpassword.jsx";
function Login() {
  const navigate = useNavigate();
const [authUser, setAuthUser] = useAuth();
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userInfo = {
      email: login.email,
      password: login.password,
    };

    try {
      const res = await axios.post(
        "http://localhost:5000/create-user/login",
        userInfo,
      );

      console.log(res.data);

      // User Data Save
      localStorage.setItem("user", JSON.stringify(res.data.user));
      setAuthUser(res.data.user);
      toast.success(res.data.Message);

      // Reset Form
      setLogin({
        email: "",
        password: "",
      });

      // Close Login Modal
      document.getElementById("my_modal_3")?.close();

      // Redirect to Home
      navigate("/");
    } catch (error) {
      console.log(error);

      toast.success(error.response?.data?.Message || "Something went wrong");
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="w-full max-w-md mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-center">Welcome Back</h2>

            <p className="text-center mt-2 mb-8">
              Login to continue your journey
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={login.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="input input-bordered w-full bg-white/10 border-white/10 text-black placeholder-gray-400 focus:border-primary focus:outline-none"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <div className="flex justify-between mb-2">
                  <label className="text-sm font-medium text-gray-300">
                    Password
                  </label>

                  <button
                    type="button"
                    onClick={() => {
                      document.getElementById("my_modal_3")?.close();
                      document.getElementById("forgot_modal")?.showModal();
                    }}
                    className="text-sm text-primary hover:underline bg-transparent border-none cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>

                <input
                  type="password"
                  name="password"
                  value={login.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  className="input input-bordered w-full bg-white/10 border-white/10 text-black placeholder-gray-400 focus:border-primary focus:outline-none"
                  required
                />
              </div>

              {/* Remember Me */}
              <label className="label cursor-pointer justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox checkbox-primary checkbox-sm"
                />
                <span className="text-gray-300">Remember me</span>
              </label>

              {/* Login Button */}
              <button
                type="submit"
                className="btn btn-primary w-full rounded-xl text-base mt-2"
              >
                Login
              </button>

              {/* Divider */}
              <div className="divider text-gray-500">OR</div>

              {/* Create Account */}
              <p className="text-center text-gray-400">
                Don't have an account?
                <span
                  onClick={() => {
                    document.getElementById("my_modal_3")?.close();
                    document.getElementById("my_modal_4")?.showModal();
                  }}
                  className="text-primary cursor-pointer font-semibold ml-2 hover:underline"
                >
                  Create Account
                </span>
              </p>
            </form>
          </div>
        </div>
      </dialog>

      <Createaccount />
      <ForgotPassword />
    </div>
  );
}

export default Login;
