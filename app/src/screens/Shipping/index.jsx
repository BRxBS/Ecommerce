import React from "react";
import { Link } from "react-router-dom";
import { BarTwo } from "../../components/BarTwo";
import { Header } from "../../components/Header";

export function Shipping() {
  window.scrollTo(0, 0);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Header />

      <div className="block  mt-28">
        <form
          className="block justify-center w-[30rem] p-8 m-auto rounded border border-black text-2xl"
          onSubmit={submitHandler}
        >
          <h6 className="text-4xl font-bold m-4 my-6 flex justify-center">
            DELIVERY ADDRESS
          </h6>
          <label>Your Address</label>
          <input
            className="border-2 border-black p-2 w-[100%] mb-4 rounded"
            type="text"
            placeholder="Enter address"
          />
          <p>Country</p>
          <input
            className="border-2 border-black p-2 w-[100%] mb-4 rounded"
            type="text"
            placeholder="Enter country"
          />
          <p>City</p>
          <input
            className="border-2 border-black p-2 w-[100%] mb-4 rounded"
            type="text"
            placeholder="Enter city"
          />
          <p>Postal Code</p>
          <input
            className="border-2 border-black p-2 w-[100%] mb-4 rounded"
            type="text"
            placeholder="Enter postal code"
          />
          <br />
          <button
            className="border p-2 w-32 ml-[8.5rem] my-8 border-black bg-black rounded text-white "
            type="submit"
          >
            <Link to="/payment">Continue</Link>
          </button>
        </form>
      </div>
    </>
  );
}
