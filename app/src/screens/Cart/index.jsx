import React from "react";
import { Header } from "../../components/Header";
import {Minus, Plus, TrashSimple } from "phosphor-react";
import { formatPrice } from "../../util/format";
import { useCart } from "../../hooks/useCart";
import './styles.scss'

export function Cart() {
  const {cart} = useCart()
  

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
       console.log('oi'),

     )

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
            console.log('oi')
            console.log('test', product.productName)
            return(
            <tr key={product.id} className="cart_product">
              <td className="">
                <img src={product.productImage1} alt="" />
              </td>
              <td>
                  <strong>{product.productName}</strong>
                  <span>{product.priceformatted}</span>
                </td>
                <td>
            <div>
              <button className="icon_button">
              <Minus size={28} />
              </button>
              <input 
              type="text" 
              readOnly
              />

              <button className="icon_button">
              <Plus size={28} />
              </button>
       
            </div>
            </td>
            <td>
                  <strong>{product.subTotal}l</strong>
                </td>
            <td>
              <button className="icon_button">
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
