import React from "react";
import { Link } from "react-router-dom";
import {Minus, Plus, TrashSimple } from "phosphor-react";
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
   const total =
     formatPrice(
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
        <table className="product_table">
          <thead>
            <tr>
            <th aria-label="product_image" />
            <th>PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
            <th aria-label="delete_icon" />
            </tr>
          </thead>

          <tbody>
          {cartFormatted.map((product) => {
            return(
            <tr key={product.id} >
              <Link 
               style={linkStyle}
              to={`/products/${product.id}`} 
           >
              <td >
                <img src={product.productImage1} alt="" />
              </td>
              <td>
                  <strong>{product.productName}</strong>
                  <span>{product.priceformatted}</span>
                </td>
              </Link>
                <td>
            <div>
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
            </td>
            <td>
                  <strong>{product.subTotal}l</strong>
                </td>
            <td>
              <button
               type="button"
               className="icon_button"
               onClick={() => handleRemoveProduct(product.id)}
               >
              <TrashSimple size={28} />
              </button>
            </td>
            </tr>
            );
          })}
          </tbody>
        </table>

        <footer >
          <button type="button" >Finalizar pedido</button>
          <div className="cart_total">
            <span>TOTAL</span>
            <strong>{total}</strong>
          </div>
        </footer>
       
      </div>
    </>
  );
}
