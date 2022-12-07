import React, { useState, useEffect } from "react";
import { HeartStraight } from "phosphor-react";
import { Link } from "react-router-dom";
import { api } from '../../services/api';
import { useFav } from "../../hooks/useFav";
import "./styles.scss";




export function Favorite() {
  
  const { fav, removeProduct } = useFav()



  function handleRemoveProduct(id) {
    removeProduct(id)

  }
  return (
    
      <div className="container_fav_product">
        {fav.map((product) => (
          <div
            className="container_fav_map"
            key={product.id}
          >
            <div className="content_fav_wrapper">
              <div  className="img_fav_container">
              <Link to={`/products/${product.id}`}>
                
                  <img
                    className="img_fav"
                    src={product.productImage1}
                    alt={product.productName}
                  />
              
               
              </Link>
              </div>

              <div className="name_price_fav_wraper">
                <p>
                  <Link style={{textDecoration: 'none'}}
                    className="name_fav_link"
                    to={`/products/${product.id}`}
                  >
                    {product.productName}
                  </Link>
                </p>
                <div className="price_heart_fav_wrapper">
                <h3
                  className="price_fav"
                >
                  R${product.productPrice}

                </h3>
                <HeartStraight 
                weight="fill" 
                onClick={() => handleRemoveProduct(product.id)}
                size={30} />
                </div>
  
              </div>
            </div>
          </div>
        ))}
      </div>
    
  );
}
