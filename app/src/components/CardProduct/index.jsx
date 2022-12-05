import React, { useState, useEffect } from "react";
import { HeartStraight } from "phosphor-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { api } from '../../services/api';
import "./styles.scss";

const url = "http://localhost:8000/products";

export function CardProduct() {
  const [products, setProductes] = useState("");

  const getAllProducts = () => {
    axios.get(url).then((res) => {
      const allProducts = res.data;
      setProductes(allProducts);
      console.log("card products", allProducts);
    });
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  if (!products) return null;

  return (
    <>
      <div className="container_CardProduct">
        {products.map((product) => (
          <div
            className="container_map"
            key={product.id}
          >
            <div className="content_wrapper">
              <div  className="img_container">
              <Link to={`/products/${product.id}`}>
                
                  <img
                    className="img"
                    src={product.productImage1}
                    alt={product.productName}
                  />
                                
                  <img   className="img_overlay" 
                    src={product.productImage2}
                    alt={product.productName} />
               
              </Link>
              </div>

              <div className="name_price_wraper">
                <p>
                  <Link style={{textDecoration: 'none'}}
                    className="name_link"
                    to={`/products/${product.id}`}
                  >
                    {product.productName}
                  </Link>
                </p>
                <div className="price_heart_wrapper">
                <h3
                  className="price"
                >
                  R${product.productPrice}

                </h3>
                <HeartStraight size={30} />
                </div>
  
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
