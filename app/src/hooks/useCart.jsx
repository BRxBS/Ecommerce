import { Children } from 'react';
import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

const CartContext = createContext();

export function CartProvider({ children }){
    const [cart, setCart] = useState(() => {
        const storagedCart = localStorage.getItem("@LisStore");

        if(storagedCart) {
            return JSON.parse(storagedCart)
        }
        return[]
    });

    console.log('cart',cart)

    const addProduct = async (producdId) => {
        try{
            const updatedCart = [...cart];
            const productExists = updatedCart.find(product => product.id === producdId);

            const stock = await api.get(`/stock/${producdId}`);

            const stockAmount = stock.data.amount;
            const currentAmount = productExists ? productExists.amount : 0;
            const Amount = currentAmount + 1;

            if(amount > stockAmount) {
                toast.error("Quantidade solicitada fora de estoque");
                return
            } if(productExists) {
                productExists.amount = Amount;
            } else{
                const product = await api.get(`/products/${productId}`)

                const newProduct = {
                    ...product.data,
                    amount: 1
                }
                updatedCart.push(newProduct)
            }

            setCart(updatedCart)
            localStorage.setItem("@LisStore:cart", JSON.stringify(updatedCart));
        }catch{
            toast.error("Erro na adição do produto");
        }
    }



    return(
        <CartContext.Provider
        value={{cart, addProduct}}
        >
            {children}
        </CartContext.Provider>
    )

}

export function useCart(){
    const context = useContext(CartContext)

    return context;
}