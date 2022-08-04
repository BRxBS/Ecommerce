import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Login() {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <div className="block md:w-[26rem] h-[30rem] m-auto my-2 border-8 border-black p-2 text-2xl rounded">
        <p className="text-4xl font-bold m-4">Login</p>
        <hr />
        <form className=" h-[23rem] p-8 relative">
          <p className="text-2xl">Email</p>
          <input
            className="border-2 border-black p-1 w-[100%]  mb-4"
            type="email"
            placeholder="Email"
          />
          <p>Password</p>
          <input
            className="border-2 border-black p-1 w-[100%] "
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-between ">
            <div>
              <input
                type="checkbox"
                id="logCheck"
                className="text-sm mr-1 accent-gray-800 cursor-pointer "
              />
              <label htmlFor="logCheck" className="text-sm cursor-pointer ">
                Remember Me
              </label>
            </div>
            <a href="#" className="text-sm text-gray-400 hover:underline">
              Forgot Password?
            </a>
          </div>
          <br />
          <button
            className="border p-2 w-24 ml-20  md:ml-28 border-black bg-black rounded text-white "
            type="submit"
          >
            Login
          </button>
          <br />
          <div className="flex mt-5">
            <span className="text-base ml-3 md:ml-12 font-semibold">
              Not a Member?
              <Link className=" ml-2 hover:underline" to={"/register"}>
                Create Account
              </Link>
            </span>
          </div>
        </form>
      </div>
    </>
  );
};


