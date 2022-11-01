import React from "react";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";

export function Cart() {
  window.scrollTo(0, 0);
  return (
    <>
      <Header />
      {/* Cart */}
      <div className="m-6">
        <div className="block md:flex h-96">
          <div className="w-1/2 min-h-min mx-24 p-4 border-8 border-black ">
            <h1 className="text-4xl font-bold border-b-2 mb-4 border-black">
              Items
            </h1>

            <table className=" w-[100%] border-collapse">
              <thead className="border-b-2  border-black">
                <tr className="my-2">
                  <th className="text-2xl">Product</th>
                  <th className="text-2xl">Price</th>
                  <th className="text-2xl">Amount</th>
                  <th className="text-2xl">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>
                    <img src="" alt="img" />
                  </th>
                  <th>600</th>
                  <th>1</th>
                  <th>600</th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className=" w-1/2 mr-24">
            <div className="w-96 h-96 p-8 m-auto shadow-2xl ">
              <h2 className="text-4xl font-bold border-b-2  border-black mb-4">
                Order Summary
              </h2>
              <div className="flex justify-between mb-32">
                <p>Subtotal</p>
                <p className="text-2xl font-semibold">$600</p>
              </div>
              <br />
              <Link
                className="bg-black rounded text-white p-3  ml-[5.5rem] "
                to={"/shipping"}
              >
                Finalize Purchase
              </Link>
            </div>
          </div>
        </div>
        {/* End of cart iterms */}
      </div>
    </>
  );
}
