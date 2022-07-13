import React from "react";
import { Link } from "react-router-dom";
import {Header} from "./../components/Header";

export function Payment(){
  window.scrollTo(0, 0);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />
      <div className="block  mt-28">
        <form
          className="block justify-center h-96 w-[30rem] p-8 m-auto rounded border border-black text-2xl"
          onSubmit={submitHandler}
        >
          <h6 className="text-3xl font-bold flex justify-center mb-4">
            SELECT PAYMENT METHOD
          </h6>
          <div className="">
            <div className="">
              <input className="" type="radio" value="PayPal" />
              <label className="m-2">Credito</label>
              <br />
              <input className="" type="radio" value="PayPal" />
              <label className="m-2">PayPal</label>
            </div>
          </div>

          <button
            className="border p-2 w-32 ml-[8.5rem] my-[10rem] border-black bg-black rounded text-white "
            type="submit"
          >
            <Link to="/placeorder">Continue</Link>
          </button>
        </form>
      </div>
    </>
  );
};

