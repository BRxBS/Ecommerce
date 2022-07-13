import React from "react";
import { Link } from "react-router-dom";
import  products  from "../data/Products";


export function CardProduct() {
  return (
    <>
      <div className="inline-block md:grid gap-4 grid-cols-3 justify-between my-40 md:m-40">
        {products.map((product) => (
          <div
            className=" w-96 m-8 rounded shadow-2xl border-2 border-black p-2"
            key={product._id}
          >
            <div className=" h-96  flex-row inline-block border-black m-8 p-4">
              <Link to={`/products/${product._id}`}>
                <div>
                  <img
                    className="h-60 w-80 border-4 rounded p-2 my-2 m-auto bg-white border-black"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
              </Link>

              <div className="h-24 text-2xl m-4">
                <p>
                  <Link
                    className="line-clamp-2 text-ellipsis"
                    to={`/products/${product._id}`}
                  >
                    {product.name}
                  </Link>
                </p>

                <h3 className=" text-3xl border-4 border-black rounded  w-[9rem] flex justify-center mt-[10%] my-2 m-auto">
                  ${product.price}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
