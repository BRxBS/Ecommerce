import { Header } from "../components/Header";
import { Rating } from "../components/Rating";
import { Message } from "../components/Error"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BarTwo } from "../components/BarTwo";
import React, { useState, useEffect } from "react";
import axios from "axios";


//http://localhost:8000/products/:product_id  link na api

//const url = `http://localhost:8000/products`;


export const SingleProduct = () => {

  const [product, setProduct] = useState({});
  const { id } = useParams(); //é o _id

        const getTheProducts = () => {
          axios
            .get(`http://localhost:8000/products/`+id)
            .then((res) => {
              const Product = res.data;
              setProduct(Product);
            });
        };
        useEffect(() => {
         
          getTheProducts();
        }, []);

        if (!product) return null;


        
      
    //product.find((p) => p._id === id);
    // console.log(product);

    
    return (
      <>
        <Header />
        <BarTwo />
        <div className="static">
          <div className=" block md:flex m-8 h-[32rem]">
            <div className="bg-gray-100 w-[100%] md:w-1/2 md:mx-28 rounded flex justify-center ">
              <div className=" block md:flex ">
                <img
                  className="h-[15rem] w-[30rem] md:h-96 md:w-96 m-auto border border-black"
                  src={product.productImage}
                  alt={product.productName}
                />
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="border-8 mt-16 md:mt-0 border-black rounded mb-4 p-4">
                  <div className="text-4xl ">{product.productName}</div>
                </div>

                <div className=" block justify-between mx-2 my-4">
                  <div className="my-4 block items-center ">
                    <h6 className="text-3xl">Price: ${product.productPrice}</h6>
                  </div>

                  <div className=" my-4">
                    <h6 className="text-3xl">Status</h6>
                    {product.productQuantity > 0 ? (
                      <span>In Stock</span>
                    ) : (
                      <span>unavailable</span>
                    )}
                  </div>
                  {product.productQuantity > 0 ? (
                    <>
                      <div className="static">
                        <h6 className="text-3xl">Quantity</h6>
                        <select className="w-16 m-2 border-2 bg-gray-200 border-black ">
                          {[...Array(product.productQuantity).keys()].map(
                            (x) => (
                              <option key={x + 1} value={x + 1}>
                                {x + 1}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                      <button className="w-28 p-2 ml-[5rem] md:mt-20 md:ml-[7rem] border-[0.25rem] border-black bg-black rounded text-white">
                        Add To Cart
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* RATING */}
          <div className="block">
            <div className="md:m-8 mt-64">
              <p className="p-8 text-2xl ">
                <strong className="text-3xl">Discripton</strong> <br />
                {product.productDescription}
              </p>
              <br />
              <div className="p-8 text-2xl ">
                <h6 className="font-bold text-3xl">REVIEWS</h6>
                <Message>No Reviews</Message>
              </div>
              <div className="p-8 text-2xl ">
                <strong className="text-3xl">Admin Doe</strong>
                <Rating />
                <span>Jan 12 2021</span>
                <div className=" mt-3">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </div>
              </div>
            </div>
            <hr />
            <div className="m-8 p-8 text-2xl ">
              <h6 className="font-bold text-2xl">WRITE A CUSTOMER REVIEW</h6>
              <div className="my-4"></div>

              <form>
                <div className="my-4">
                  <strong>Rating </strong>
                  <select className=" border-2 bg-gray-200 border-gray-500">
                    <option value="">Select...</option>
                    <option value="1">1 - Poor</option>
                    <option value="2">2 - Fair</option>
                    <option value="3">3 - Good</option>
                    <option value="4">4 - Very Good</option>
                    <option value="5">5 - Excellent</option>
                  </select>
                </div>
                <div className="my-4">
                  <strong>Comment</strong>
                  <br />
                  <textarea
                    rows="4"
                    cols="50"
                    className="w-52 md:w-0 border-2 bg-gray-200 border-gray-500"
                  ></textarea>
                </div>
                <div className="my-3">
                  <button className=" bg-black border-0 p-3 rounded text-white">
                    SUBMIT
                  </button>
                </div>
              </form>
              <div className="my-3">
                <Message variant={"alert-warning"}>
                  Please{" "}
                  <Link to="/login">
                    " <strong>Login</strong> "
                  </Link>{" "}
                  to write a review{" "}
                </Message>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}