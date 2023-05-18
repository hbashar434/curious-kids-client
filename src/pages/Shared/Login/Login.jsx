import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const [error, setError] = useState("");
  return (
    <div className="hero min-h-screen bg-base-200 pb-24">
      <div className="hero-content flex-col">
        <h1 className="text-5xl font-bold">Please Login now!</h1>
        <div className="text-center lg:text-left"></div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="email"
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
                  required
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <p className="text-error text-sm">{error}</p>
              <div className="form-control mt-6">
                <button className="my-btn-cherry">Login</button>
              </div>
            </form>
            <div className="flex flex-col w-full border-opacity-50">
              <div className="divider">OR</div>
            </div>
            <button className="btn btn-outline border-pink-500 hover:bg-red-400 hover:border-none">
              {" "}
              <span className="mr-2">
                <FcGoogle size={"30px"}></FcGoogle>
              </span>
              Sign In With Google
            </button>
            <label>
              New to Curious kids?
              <Link
                to="/register"
                className="label-text-alt underline pl-2 text-lg font-semibold hover:text-pink-600"
              >
                Create an Account
              </Link>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
