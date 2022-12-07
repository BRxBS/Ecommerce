import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

const CartContext = createContext();

export function CartProvider({ children }){

    const [cart, setCart] = useState(() => {
        const storagedCart = localStorage.getItem("@LisStore:cart");

        if(storagedCart) {
            return JSON.parse(storagedCart)
        }
        return[]
    });

    const keyStorage = '@LisStore:cart';

    
    const addProduct = async (id) => {
        
        console.log('id addProduct', id)
        try{
            const updatedCart = [...cart];

            const productExists = updatedCart.find(product => product.id === id);

            const stock = await api.get(`/stock/${id}`);
            console.log('id', id)

            const stockAmount = stock.data.amount;
            const currentAmount = productExists ? productExists.amount : 0;
            const Amount = currentAmount + 1;


            if(Amount > stockAmount) {
                toast.error("Quantidade solicitada fora de estoque");
                return
            } if(productExists) {
                productExists.amount = Amount;
            } else{
                const product = await api.get(`/products/${id}`)

                const newProduct = {
                    ...product.data,
                    amount: 1
                }
                updatedCart.push(newProduct)
            }

            setCart(updatedCart)
            localStorage.setItem(keyStorage, JSON.stringify(updatedCart));
        }catch{
            toast.error("Erro na adição do produto");
        }
    }

    const removeProduct = (id) =>{
        try{
            console.log('Id removeProduct', id)
            const updateCart = [...cart]
            const productIndex = updateCart.findIndex(product => product.id === id);
            console.log('productIndex', productIndex)
            if(productIndex >= 0){
                updateCart.splice(productIndex, 1)
                setCart(updateCart);
                localStorage.setItem(keyStorage, JSON.stringify(updateCart))
            } else{
                throw Error()
            }


        }catch{
        toast.error("Erro na remoção do produto");
     
        }
    }

    const updateProductAmount = async (ProductId, amount) => {

        try{

            if(amount <=0){
                return
            }

            const stock = await api.get(`/stock/${ProductId.productId}`);

            const stockAmount = stock.data.amount;
    

            if(amount > stockAmount) {
                toast.error("Quantidade solicitada fora de estoque");
                return
            }
            const updateCart = [...cart];
            const productExists = updateCart.find(
                (product) => product.id === ProductId.productId  )
            if(productExists) {
                productExists.amount = ProductId.amount
                setCart(updateCart)
                localStorage.setItem(keyStorage, JSON.stringify(updateCart));
            }else{
                throw Error
            }
        } catch {
            toast.error("Erro na alteração de quantidade do produto");
          }
    }


    return(
        <CartContext.Provider
        value={{cart, addProduct, removeProduct, updateProductAmount}}
        >
            {children}
        </CartContext.Provider>
    )

}

export function useCart(){
    const context = useContext(CartContext)

    return context;
}