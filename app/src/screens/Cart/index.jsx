import React from "react";
import { Link } from "react-router-dom";
import {Minus, Plus, TrashSimple, Handbag } from "phosphor-react";
import { formatPrice } from "../../util/format";
import { useCart } from "../../hooks/useCart";
import './styles.scss'

export function Cart() {
  const {cart, removeProduct, updateProductAmount} = useCart()
  

  const cartFormatted = cart.map(product => ({
    ...product,
    priceformatted: formatPrice(product.productPrice),
    subTotal: formatPrice(product.productPrice * product.amount)
   }))

  const total = formatPrice(
       cart.reduce((sumTotal, product) => {
         return sumTotal + product.productPrice * product.amount
       }, 0),
       )

  function handleProductIncrement(product) {
        updateProductAmount({productId: product.id, amount: product.amount + 1})

      }
    
  function handleProductDecrement(product) {
         updateProductAmount({ productId: product.id, amount: product.amount - 1});
      }
    
      function handleRemoveProduct(id) {
        removeProduct(id)

      }

      // styles of the Link
      const linkStyle = {
        display: "flex",
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
      };

  return (
    <>

      <div className="cart_container">
        <ul className="product_ul">
            { total === "R$ 0,000" 
              ?
                <div className="no_product">
                  <div className="li_1">
                  <Handbag size={40} />
                    <p>
                     O carrinho esta vazio.
                    </p>   
                  </div>
                </div>
              : 
            cartFormatted.map((product) => {
     
              return(
             <li key={product.id} className="li_body">

                  <li className="li_product">
                  <h4 className="product">PRODUTO</h4>
                  <Link 
                  style={linkStyle}
                  to={`/products/${product.id}`} 
                  >
                  <div className="img_div">
                  <img src={product.productImage1} alt="" />
                  </div>
                 
                  
                   <p>
                      <strong>{product.productName}</strong>
                      <span>{product.priceformatted}</span>
                   </p>
                  </Link>
                  </li>
              <div className="quantity_subtotal_wrapper">

             
              <li className="li_quantity">
              <h4 className="quantity_h4">QUANTIDADE</h4>
                <div className="quantity_div">
                  <button 
                  type="button"
                  className="icon_button"
                  disabled={product.amount <= 1}
                  onClick={() => handleProductDecrement(product)}
                  >
                  <Minus size={28} />
                  </button>

                  <input 
                  type="text" 
                  readOnly
                  value={product.amount}
                  />

                  <button
                  type="button"
                  className="icon_button"
                  onClick={() => handleProductIncrement(product)}>
                  <Plus size={28} />
                  </button>
          
              </div>
                </li>
                <li className="li_subTotal">
                      <h4 className="sub_total_h4">SUBTOTAL</h4>
                      <strong className="sub_total">{product.subTotal}</strong>
                </li>
                </div>

                <li className="li_remove">
                  <button
                  type="button"
                  className="icon_trash_button"
                  onClick={() => handleRemoveProduct(product.id)}
                  >
                  <TrashSimple size={28} />
                  </button>
                </li>
              
            </li>
                );
              })}
                  
            
         
        
        </ul>
    

        <footer >
          <div className="cart_total">
            <span>TOTAL</span>
           
            {total === "R$ 0,000" ? <strong>R$ 0</strong> :  <strong>{total}</strong>}
            
          </div>
          <button type="button" >Finalizar pedido</button>
        </footer>
       
      </div>
    </>
    
  );
         
           
}
