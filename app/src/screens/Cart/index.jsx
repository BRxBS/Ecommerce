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
        <table className="product_table">
          <thead>
            <tr>
            
            <th className="th_product">PRODUTO</th>
            <th>QUANTIDADE</th>
            <th>SUBTOTAL</th>
           
            </tr>
          </thead>
         

          <tbody>
            { total === "R$ 0,000" 
              ?
                <tr className="no_product">
                  <td className="td_1">
                  <Handbag size={32} />
                    <p>
                    
                     O carrinho esta vazio.
                    </p>   
                  </td>

                  <td>
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
                  </td>

                  <td>
                    <strong>0</strong>
                  </td>
                </tr>
              : 
            cartFormatted.map((product) => {
     
              return(
                <tr key={product.id} >
                  <td>
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
                  </td>

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
                      <strong>{product.subTotal}</strong>
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
            {total === "R$ 0,000" ? <strong>R$ 0</strong> :  <strong>{total}</strong>}
            
          </div>
        </footer>
       
      </div>
    </>
  );
         
           
}
