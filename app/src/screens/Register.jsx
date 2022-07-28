import React, { useState } from "react";
import { Link } from "react-router-dom";
import {Header} from "../components/Header";


export function Register(){
    window.scrollTo(0, 0);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");

    function checkPassword(){
      if(password1 !== password2){
        
      }
    }

     const fortmatResponse = (res) => {
       return JSON.stringify(res, null, 2);
     };

     async function createPost() {
      const postData = {
        username: name,
        email: email,
        password: password,
      };
     }
   
    return (
      <>
        <Header />
        <div className="block relative w-[28rem] h-[38rem] m-auto mt-2 border-8 border-black p-2 text-2xl rounded">
          <p className="text-4xl font-bold m-2">Login</p>
          <hr />
          <form className="h-[23rem] p-10 ">
            <p>Name</p>
            <input
              className="border-2 border-black p-1 w-[100%]  mb-4"
              type="text"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <p>Email</p>
            <input
              className="border-2 border-black p-1 w-[100%]  mb-4"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <p>Password</p>
            <input
              className="border-2 border-black p-1 w-[100%]  mb-4"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword1(e.target.value)}
              value={password1}
            />
            <p>Password</p>
            <input
              className="border-2 border-black p-1 w-[100%]  mb-4"
              type="password"
              placeholder="Confirm Password"
              onChange={(e) => setPassword2(e.target.value)}
              value={password2}
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