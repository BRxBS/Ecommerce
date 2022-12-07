import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

const FavContext = createContext();

export function FavProvider({ children }){
 const keyStorage = '@LisStore:Fav';

    const [fav, setFav] = useState(() => {
        const storageFav = localStorage.getItem(keyStorage)

        if(storageFav) {
            return JSON.parse(storageFav)
        }
        return[]
   })


   const addProductFav = async (id) =>{

    try{
        const updatedFav = [...fav];

        const productExists = updatedFav.find(Product => Product.id === id)

        const stock = await api.get(`/stock/${id}`);

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
            updatedFav.push(newProduct)
        }

        setFav(updatedFav)
        localStorage.setItem(keyStorage, JSON.stringify(updatedFav));


    } catch{
        toast.error("Erro na adição do produto");
    }
   }

   const removeProduct = (productId) => {
    try{
        const updateFav = [...fav];
        const productIndex = updateFav.findIndex(product => product.id === productId);
        if(productIndex >= 0 ){
            updateFav.splice(productIndex, 1)
            setFav(updateFav);
            localStorage.setItem(keyStorage,JSON.stringify(updateFav))
        } else{
            throw Error()
        }

    }catch{
        toast.error("Erro na remoção do produto");
    }
   }
    return(
 
            <FavContext.Provider value={{fav, addProductFav, removeProduct}}>
                {children}
            </FavContext.Provider>
    )
}

export function useFav(){
    const context = useContext(FavContext)

    return context;
}

