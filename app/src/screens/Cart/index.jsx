import React from "react";
import { Header } from "../../components/Header";
import {Minus, Plus, TrashSimple } from "phosphor-react";
import { formatPrice } from "../../util/format";
import './styles.scss'

export function Cart() {

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
            <tr className="cart_product">
              <td className="">
                <img src='https://res.cloudinary.com/dqh64c3iq/image/upload/v1667947965/ecommerce/blusa/Web_capture_8-11-2022_195217_www.farfetch.com_wzaoz8.jpg' alt="" />
              </td>
              <td>
                  <strong>title</strong>
                  <span>priceformatted</span>
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
                  <strong>subTotal</strong>
                </td>
            <td>
              <button className="icon_button">
              <TrashSimple size={28} />
              </button>
            </td>
            </tr>
           
          </tbody>
        </table>

        <footer >
          <button type="button" >Finalizar pedido</button>
          <div className="cart_total">
            <span>TOTAL</span>
            <strong>tottal</strong>
          </div>
        </footer>
       
      </div>
    </>
  );
}
