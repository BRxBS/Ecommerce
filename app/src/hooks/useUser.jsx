import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';

const UserContext = createContext();

export function UserProvider({ children }){

const keyStorage = '@LisStore:User';

const [user, setUser] = useState(() => {

    const storageUser = localStorage.getItem(keyStorage)
   
    if(storageUser) {
            return JSON.parse(storageUser)
        }

    return[]
}
)
// useEffect(() =>{
//     localStorage.removeItem();
// },[])


const userLogin = async (email) => {
    console.log("email UserLogin" ,email)

    try{
        const updatedUser = [...user];
        console.log("updatedUser", updatedUser)

        const userExists = updatedUser.find(User => User.email === email)
        console.log("userExists", userExists )

         const userEmail = await api.get(`/users/${email}`)
        console.log('userEmail', userEmail )

        const userEmailData = userEmail.data;
        console.log('userEmailData', userEmailData )
        

        const currentUser = userExists ? userExists.email : '';
        console.log("currentUser", currentUser )

        

        setUser(email)
        localStorage.setItem(keyStorage, JSON.stringify(email));



    }catch{
        toast.error("Erro em encontrar o usuario");
    }
}

// useEffect(() =>{
//     userLogin("sheilaluisabruna@gmail.com")
// },[])
    return(
 
        <UserContext.Provider  value={{user, userLogin}}>
            {children}
        </UserContext.Provider>
)

}

export function useUser(){
    const context = useContext(UserContext)

    return context;
}
