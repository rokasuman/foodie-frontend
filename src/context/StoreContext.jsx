import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { Prev } from "react-bootstrap/esm/PageItem";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) =>{

    const [cardItems,setCaerdItems] = useState({});

    const addToCard = (itemId) =>{
        if(!cardItems[itemId]){
            setCaerdItems((Prev) =>({...Prev,[itemId]:1}))
        }else{
            setCaerdItems((Prev) => ({...Prev,[itemId]:Prev[itemId] +1}))
        }

    }
    const removeFromCard = (itemId) =>{
        setCaerdItems((Prev) => ({...Prev,[itemId]:Prev[itemId]-1}))
    }

    useEffect (() =>{
        console.log(cardItems);

    },[cardItems])

    const contextValue ={
        food_list,
        cardItems,
        setCaerdItems,
        addToCard,
        removeFromCard

    }
   return (
  
    <StoreContext.Provider value={contextValue}>
        {props.children}

    </StoreContext.Provider>
  
    
   )
}
export default StoreContextProvider;