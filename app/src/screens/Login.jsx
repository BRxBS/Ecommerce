import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";

export function Login() {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <div className="block w-[26rem] h-[30rem] m-auto my-32 border-8 border-black p-2 text-2xl rounded">
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
            className="border-2 border-black p-1 w-[100%] mb-4"
            type="password"
            placeholder="Password"
          />
          <br />
          <button
            className="border p-2 w-24 m-8 absolute left-28 border-black bg-black rounded text-white "
            type="submit"
          >
            Login
          </button>
          <br />
          <Link className="absolute bottom-1 right-5" to={"/register"}>
            Create Account
          </Link>
        </form>
      </div>
    </>
  );
};


