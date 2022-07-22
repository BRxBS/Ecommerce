import React, { useState } from "react";
import { Header } from "../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SingleProduct } from "./SingleProduct";


const url = "http://localhost:8000/62d18eb2128f70778a91fb7b";

export function Post() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState("");

  const [post, setPost] = useState("");



  const fortmatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function createPost() {
    const postData = {
      productName: productName,
      productDescription: productDescription,
      productPrice: productPrice,
      productQuantity: productQuantity,
      productImage: productImage,
    };

    try {
      const res = await axios.post(url, postData,);

      const result = {
        status: res.status,
        data: res.data,
      };

      setPost(fortmatResponse(result));
    } catch (error) {
      setPostResult(fortmatResponse(error.response?.data));
    }
  }

  return (
    <div className="block ">
      <Header />
      <div className="w-screen bg-gray-100">
        <form onSubmit={createPost} className="block mx-20 bg-gray-100 mt-24">
          <label htmlFor="" className="text-2xl font-semibold">
            Product Namee
          </label>{" "}
          <br />
          <input
            type="text"
            className="w-64 p-1 rounded border-2 border-black"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
          <br />
          <label htmlFor="" className="text-2xl font-semibold">
            Product Description
          </label>{" "}
          <br />
          <textarea
            cols="30"
            rows="5"
            className="w-64 p-1 rounded border-2 border-black"
            onChange={(e) => setProductDescription(e.target.value)}
            value={productDescription}
          ></textarea>
          <br />
          <label htmlFor="" className="text-2xl font-semibold">
            Product Price
          </label>{" "}
          <br />
          <input
            type="text"
            className="w-64 p-1 rounded border-2 border-black"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
          <br />
          <label htmlFor="" className="text-2xl font-semibold">
            Product Quantity
          </label>{" "}
          <br />
          <input
            type="text"
            className="w-64 p-1 rounded border-2 border-black"
            onChange={(e) => setProductQuantity(e.target.value)}
            value={productQuantity}
          />
          <br />
          <label htmlFor="" className="text-2xl font-semibold">
            Product Image
          </label>{" "}
          <br />
          <input
            type="text"
            className="w-64 p-1 rounded border-2 border-black"
            onChange={(e) => setProductImage(e.target.value)}
            value={productImage}
          />
         
          <Link to={""}>
            <button
              className="border p-2 w-24 m-8 absolute left-28 border-black bg-black rounded text-white "
              type="submit"
            >
              submit
            </button>
          </Link>
       
        </form>
      </div>
    </div>
  );
}
