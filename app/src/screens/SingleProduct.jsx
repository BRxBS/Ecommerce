import products from "../data/Products"
import React from "react";
import { Header } from "../components/Header";
import { Rating } from "../components/Rating";
import { Message } from "../components/Error"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BarTwo } from "../components/BarTwo";



export const SingleProduct = ( ) => {
    const { id } = useParams();
    const product = products.find((p) => p._id === id);
    
    return (
      <>
        <Header />
        <BarTwo />
        <div className="static mt-[15rem]">
          <div className=" flex m-8 h-[32rem]">
            <div className="bg-gray-100 w-1/2 mx-28 rounded flex justify-center ">
              <div className="">
                <img src={product.image} alt={product.name} />
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="border-8 border-black rounded mb-4 p-4">
                  <div className="text-4xl ">{product.name}</div>
                </div>

                <div className=" block justify-between mx-2 my-4">
                  <div className="my-4 block items-center ">
                    <h6 className="text-3xl">Price: ${product.price}</h6>
                  </div>
                  <div className=" my-4">
                    <h6 className="text-3xl">Status</h6>
                    {product.countInStock > 0 ? (
                      <span>In Stock</span>
                    ) : (
                      <span>unavailable</span>
                    )}
                  </div>
                  {product.countInStock > 0 ? (
                    <>
                      <div className="static">
                        <h6 className="text-3xl">Quantity</h6>
                        <select className="w-16 m-2 border-2 bg-gray-200 border-black ">
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <button className="w-28 p-2  mt-20 ml-[14rem] border-[0.25rem] border-black bg-black rounded text-white">
                        Add To Cart
                      </button>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>

          {/* RATING */}
          <div className="">
            <div className="m-8">
              <p className="p-8 text-2xl ">
                <strong className="text-3xl">Discripton</strong> <br />
                {product.description}
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
                    className="border-2 bg-gray-200 border-gray-500"
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