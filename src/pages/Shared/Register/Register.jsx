import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  return (
    <div className="hero min-h-screen bg-base-200 pb-24">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Please Register now!</h1>
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                required
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                required
                className="input input-bordered"
              />
              <p className=" text-error mt-2">{passwordError}</p>
            </div>
            <p className="text-error">{error}</p>
            <div className="form-control mt-6">
              <button className="my-btn-cherry">
                Register
              </button>
            </div>
            <label>
              Already have an account?
              <Link
                to="/login"
                className="label-text-alt underline pl-2 text-lg font-semibold hover:text-pink-500"
              >
                Please Login
              </Link>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
