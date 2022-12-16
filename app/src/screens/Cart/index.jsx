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
        <ul className="product_li">

        
          <div>
            { total === "R$ 0,000" 
              ?
                <ul className="no_product">
                  <li className="li_1">
                  <Handbag size={32} />
                    <p>
                    
                     O carrinho esta vazio.
                    </p>   
                  </li>

                  <li>
                    <div>
                      <button 
                      type="button"
                      className="icon_button">
                      <Minus size={28} />
                      </button>

                      <input 
                      type="text" 
                      readOnly
                      />

                      <button
                      type="button"
                      className="icon_button">
                      <Plus size={28} />
                      </button>
                    </div>
                  </li>

                  <li>
                    <strong>0</strong>
                  </li>
                </ul>
              : 
            cartFormatted.map((product) => {
     
              return(
             <li key={product.id} className="ul_body">

                  <li>
                  <h4 className="product">PRODUTO</h4>
                  <Link 
                  style={linkStyle}
                  to={`/products/${product.id}`} 
              >
                  
                    <img src={product.productImage1} alt="" />
                  
                  <p>
                      <strong>{product.productName}</strong>
                      <span>{product.priceformatted}</span>
                    </p>
                  </Link>
                  </li>

              <li>
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
                <li>
                      <h4 className="sub_total_h4">SUBTOTAL</h4>
                      <strong className="sub_total">{product.subTotal}</strong>
                </li>

                <li>
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
                  
            
         
          </div>
        </ul>

        <footer >
          <button type="button" >Finalizar pedido</button>
          <div className="cart_total">
            <span>TOTAL</span>
            {total === "R$ 0,000" ? <strong>R$ 0</strong> :  <strong>{total}</strong>}
            
          </div>
        </footer>
       
      </div>
    </>
  );
         
           
}
