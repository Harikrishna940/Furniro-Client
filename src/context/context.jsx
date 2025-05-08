import {createContext, useEffect, useState } from "react";

export const Auth = createContext({
    isAuth:false,
    setisAuth:()=>{}


})

export const Authprovider = ({children})=>{
    const [isAuth,setisAuth] = useState(false)
    useEffect(()=>{
        const token = sessionStorage.getItem('token')
        if (token) {
            setisAuth(true)
            
        }
    },[])
    return (
        <Auth.Provider value={{isAuth,setisAuth}}>
            {children}
        </Auth.Provider>
    )
}