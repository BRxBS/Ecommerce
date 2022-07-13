import React from "react";
import { Link } from "react-router-dom";
import {Header} from "../components/Header";


export function Register(){
    window.scrollTo(0, 0);
   
    return (
      <>
        <Header />
        <div className="block relative w-[28rem] h-[38rem] m-auto mt-32 border-8 border-black p-2 text-2xl rounded">
          <p className="text-4xl font-bold m-2">Login</p>
          <hr />
          <form className="h-[23rem] p-8 ">
            <p>Name</p>
            <input
              className="border-2 border-black p-1 w-[100%]  mb-4"
              type="text"
              placeholder="Username"
            />
            <p>Email</p>
            <input
              className="border-2 border-black p-1 w-[100%]  mb-4"
              type="email"
              placeholder="Email"
            />
            <p>Password</p>
            <input
              className="border-2 border-black p-1 w-[100%]  mb-4"
              type="password"
              placeholder="Password"
            />
            <p>Password</p>
            <input
              className="border-2 border-black p-1 w-[100%]  mb-4"
              type="password"
              placeholder="Password"
            />

            <button
              className="border absolute bottom-[4.5rem] left-[9.5rem] w-32 h-10 border-black bg-black rounded text-white "
              type="submit"
            >
              Register
            </button>
            <p className="absolute bottom-5 right-5">
              <Link to={"/login"}>
                I Have Account <strong className="underline">Login</strong>
              </Link>
            </p>
          </form>
        </div>
      </>
    );

}