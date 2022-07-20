import React,  { useState } from "react";
import { Header } from "../components/Header"
import axios from "axios";
import { useEffect } from "react";


const api = axios.create({
  url: "http://localhost:8000/62d18eb2128f70778a91fb7b",
  headers: {
    authentication: "62d18eb2128f70778a91fb7b",
  },
});

export function Post() {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productQuantity, setProductQuantity] = useState("");
  const [productImage, setProductImage] = useState('');

  const [post, setPost] = useState('')


  useEffect(() => {
    axios.get(api).then((res) => {
      setPost(res.data)
    })
  },[])

  function createPost() {
    axios.post(api, {
      productName: { productName },
      productDescription: { productDescription },
      productPrice: { productPrice },
      productQuantity: { productQuantity },
      productImage: { productImage }
    }).then((res) => {
      setPost(res.data)
    })
  }


    return (
      <div className="block ">
        <Header />
        <div className="w-screen bg-gray-100">
          <form
            onSubmit={createPost}
            className="block mx-20 bg-gray-100 mt-24"
          >
            <label htmlFor="" className="text-2xl font-semibold">
              Product Name
            </label>{" "}
            <br />
            <input
              type="text"
              className="w-64 p-1 rounded border-2 border-black"
              onChange={(e) => setProductName(e.target.value)}
              value={post.productName}
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
              value={post.productDescription}
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
              value={post.productPrice}
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
              value={post.productQuantity}
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
              value={post.productImage}
            />
            <button
              className="border p-2 w-24 m-8 absolute left-28 border-black bg-black rounded text-white "
              type="submit"
            >
              submit
            </button>
          </form>
        </div>
      </div>
    );
}