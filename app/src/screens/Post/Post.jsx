import React, { useState } from "react";
import { Header } from "../../components/Header";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { SingleProduct } from "../SingleProduct/SingleProduct";

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
      const res = await axios.post(url, postData);

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
    <div className="block h-screen">
      <Header />
      <div className=" mt-5">
        <form
          onSubmit={createPost}
          className="block m-auto p-4 w-72 rounded shadow-2xl border-2 border-black "
        >
          <label htmlFor="name" className="text-2xl font-semibold">
            Product Name
          </label>{" "}
          <input
            type="text"
            id="name"
            className="w-64 p-1 rounded border-2 border-black"
            onChange={(e) => setProductName(e.target.value)}
            value={productName}
          />
          <label htmlFor="description" className="text-2xl font-semibold">
            Product Description
          </label>{" "}
          <textarea
            id="description"
            cols="30"
            rows="5"
            className="w-64 p-1 rounded border-2 border-black"
            onChange={(e) => setProductDescription(e.target.value)}
            value={productDescription}
          ></textarea>
          <label htmlFor="price" className="text-2xl font-semibold">
            Product Price
          </label>{" "}
          <input
            type="text"
            id="price"
            className="w-64 p-1 rounded border-2 border-black"
            onChange={(e) => setProductPrice(e.target.value)}
            value={productPrice}
          />
          <label htmlFor="quantity" className="text-2xl font-semibold">
            Product Quantity
          </label>{" "}
          <input
            type="text"
            id="quantity"
            className="w-64 p-1 rounded border-2 border-black"
            onChange={(e) => setProductQuantity(e.target.value)}
            value={productQuantity}
          />
          <label htmlFor="image" className="text-2xl font-semibold">
            Product Image
          </label>{" "}
          <input
            type="text"
            id="image"
            className="w-64 p-1 rounded border-2 border-black"
            onChange={(e) => setProductImage(e.target.value)}
            value={productImage}
          />
          <button
            className="border p-2 w-24 mx-20 my-4 border-black bg-black rounded text-white"
            type="submit"
          >
            {" "}
            submit
          </button>
        </form>
      </div>
    </div>
  );
}
