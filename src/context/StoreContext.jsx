import { createContext,  useState } from "react";
import { food_list } from "../assets/assets";


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

    const getTotalCartAmount = ()=>{
        let totalAmount = 0;
        for(const item in cardItems){

            if(cardItems[item]>0)
            {
            let iteminfo = food_list.find((product) => product._id === item);
            totalAmount += iteminfo.price * cardItems[item]
            }
        }
        return totalAmount;
      }

    const contextValue ={
        food_list,
        cardItems,
        setCaerdItems,
        addToCard,
        removeFromCard,
        getTotalCartAmount


    }
   return (
  
    <StoreContext.Provider value={contextValue}>
        {props.children}

    </StoreContext.Provider>
  
    
   )
}
export default StoreContextProvider;