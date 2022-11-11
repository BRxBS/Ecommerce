import { Header } from "../../components/Header";
import { HeartStraight } from "phosphor-react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { SizeDropdown } from "./sizeDropdown";
import './styles.scss'

//http://localhost:8000/products/:product_id  link na api

//const url = `http://localhost:8000/products`;

export const SingleProduct = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams(); //é o _id

  console.log("id SingleProduct", id);

  const getTheProducts = () => {
    axios.get(`http://localhost:8000/products/` + id).then((res) => {
      const Product = res.data;
      setProduct(Product);
    });
  };
  useEffect(() => {
    getTheProducts();
  }, []);

  if (!product) return null;

  const name = product?.productName;
  console.log('name', name)

  const options = [   
   {"id": "P", "productSize": " P"},
  {"id": "M", "productSize": " M"},
  {"id": "G", "productSize": " G"},
  {"id": "GG", "productSize": " GG"}]


  return (
    <>
      <Header />

      <div className="main_container">
        <div className="content_container">
          <div className="img_wrapper">

            <div className="first_container">
            
            <img 
                src={product?.productImage1}
              />
               <img 
                src={product?.productImage2}
              />
            </div>

              <div className="second_container">
              <img className="img_3"
                src={product?.productImage3}
              />
               <img className="img_4"
                src={product?.productImage4}
              />
                <img className="img_5"
                src={product?.productImage5}
              />
              </div>

           
          </div>

          <div className="name_price_continer">
            
              <div className="productName_wrapper">
                <h2 >{product?.productName}</h2>
              </div>

             
                <div className="productPrice_wrapper">
                  <h6>R${product?.productPrice}</h6>
                </div>


                <div className="wrapper">

               
                <div className="dropdown_size_container">
                <SizeDropdown placeHolder='Tamanhos' options={options}/>
                </div>
                  <div className="wrapper_button">


                <button className="card_button">
                     Adicionar ao carrinho
                    </button>

                <button className="favorite_button">
                      Favoritar
                      <HeartStraight size={25}  className="fav_HeartStraight"/>
                </button>
                  </div>
                  </div>

               
              
           
          </div>
        </div>

        {/* RATING
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
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
        </div>*/}
      </div> 
    </>
  );
};
