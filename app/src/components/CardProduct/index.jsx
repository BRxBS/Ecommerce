import React, { useState, useEffect } from "react";
import { HeartStraight } from "phosphor-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useFav } from "../../hooks/useFav"; 
import "./styles.scss";

const url = "http://localhost:8000/products";

export function CardProduct() {
  const [products, setProductes] = useState([]);

  console.log("product", products)

  const { fav, addProductFav, removeProduct} = useFav();

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

  function handleAddProductOnFav(id) {
    addProductFav(id);
    console.log('oi')
   
  };
  const FavItemsAmount = fav.reduce((sumAmount, Product) =>{
    const newSumAmount = {...sumAmount};
    newSumAmount[Product.id] = Product.amount;

    return newSumAmount;
  }, 0);

  
  function handleRemoveProduct(id) {
    removeProduct(id)


  }
  
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
                 {
                  FavItemsAmount[product.id] > 0 
                  ?  <HeartStraight size={30}    weight="fill" color= "#017ff0"  onClick={() => handleRemoveProduct(product.id)} /> 
                  : <HeartStraight size={30}    onClick={() =>  handleAddProductOnFav(product.id)} />
                 }
                 

               
                </div>
  
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
