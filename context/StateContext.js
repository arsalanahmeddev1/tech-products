"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
// import {toast} from 'react-hot-toast';

const AppContext = createContext(); 
export const StateContext = ({children}) => {
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState();
    const [totalPrice, setTotalPrice] = useState();
    const [totalQuantity, setTotalQuantity] = useState();
    const [qty, setQty] = useState(1);

    const incQty = () => {
      setQty((prevQty) => prevQty + 1);
    }
    const decQty = () => {
      setQty((prevQty) =>  {
       if(prevQty < 1) return 1
       return prevQty - 1;
      });
    }
   return (
    <AppContext.Provider value={{
      showCart,
      cartItems,
      totalPrice,
      totalQuantity,
      qty,
      incQty,
      decQty
    }}>
      {children}
    </AppContext.Provider>
   )

}

export const useStateContext = () => useContext(AppContext)