import React from 'react'

function Createaccount() {
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
        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Full Name
            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="input input-bordered w-full bg-slate-800/70 border-slate-700 text-white placeholder-gray-500 focus:border-cyan-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">Email</label>

            <input
              type="email"
              placeholder="john@example.com"
              className="input input-bordered w-full bg-slate-800/70 border-slate-700 text-white placeholder-gray-500 focus:border-cyan-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">Password</label>

            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-slate-800/70 border-slate-700 text-white placeholder-gray-500 focus:border-cyan-400"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-slate-800/70 border-slate-700 text-white placeholder-gray-500 focus:border-cyan-400"
            />
          </div>

          {/* Terms */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="checkbox checkbox-info mt-1" />

            <span className="text-sm text-gray-400">
              I agree to the
              <span className="text-cyan-400 cursor-pointer hover:underline">
                {" "}
                <a href="/term-condition"> Terms & Conditions</a>
              </span>
            </span>
          </label>

          {/* Button */}
          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 border-0 rounded-xl text-white hover:scale-[1.02] transition-all duration-300"
          >
            Create Account
          </button>

          {/* Login Link */}
          <p
            onClick={() => {
              document.getElementById("my_modal_4")?.close();
              document.getElementById("my_modal_3")?.showModal();
            }}
            className="text-center text-gray-400"
          >
            Already have an account?
            <span
              className="text-cyan-400 ml-2 cursor-pointer hover:underline"
              onClick={() => {
                document.getElementById("my_modal_4").close();
              }}
            >
              Login
            </span>
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

export default Createaccount