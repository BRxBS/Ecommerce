import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const url = "http://localhost:8000/products";


export function CardProduct() {

    const [products, setProductes] = useState("");

    const getAllProducts = () => {
      axios.get(url).then((res) => {
        const allProducts = res.data;
        setProductes(allProducts);
        console.log('card products',  allProducts)
      });
    };
    useEffect(() => {
      getAllProducts();
    }, []);

    if (!products) return null;


  return (
    <>
      <div className="min-w-full  block md:grid grid-cols-3 gap-4  justify-between ">
        {products.map((product) => (
          <div
            className=" w-[19rem] my-4 md:m-4 rounded shadow-2xl border-2 border-black p-2"
            key={product._id}
          >
            <div className=" h-[23rem]  flex-row inline-block border-black m-4 p-4">
              <Link to={`/products/${product._id}`}>
                <div>
                  <img
                    className="h-52 w-80 border-4 rounded p-2 my-2 bg-white border-black"
                    src={product.productImage}
                    alt={product.productName}
                  />
                </div>
              </Link>

              <div className="h-24 text-2xl m-4 ">
                <p>
                  <Link
                    className="line-clamp-1  pl-6 text-ellipsis"
                    to={`/products/${product._id}`}
                  >
                    {product.productName}
                  </Link>
                </p>

                <h3
                  className=" text-3xl border-4 border-black rounded 
                 w-[9rem] flex justify-center mt-[10%] m-auto"
                >
                  R${product.productPrice}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}