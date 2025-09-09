import React, { useContext } from 'react'
import './cart.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router';

const Cart = () => {
  const {cardItems,food_list,removeFromCard,getTotalCartAmount} =useContext(StoreContext);
  const navigate =useNavigate()
  return (
    <div className='cart'>
      <div className="cart-items">
       <div className="cart-items-title">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>



      </div>
      <br/>
      <hr/>
      {food_list.map((item,index)=>{
        if(cardItems[item._id]>0 ){
          return(
         
            <div>
              <div className='cart-items-title cart-items-items'>
              <img src={item.image} alt=''/>
              <p>{item.name}</p>
              <p>${item.price}</p>
              <p>{cardItems[item._id]}</p>
              <p>${item.price * cardItems[item._id]}</p>
              <p onClick={()=>removeFromCard(item._id)} className='cross'>x</p>
              </div>
              <hr/>
            </div>
          

          )
        }
      })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p>Delivery fee</p>
              <p>${getTotalCartAmount() === 0 ? 0: 2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount()+2}  </b>
            </div>
          </div>
          <button onClick={ ()=>navigate("/order") }> PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Enter a promocode</p>
            <div className="cart-promocode-input">
              <input type='text' placeholder='Your code...'/>
              <button>Submit</button>
             

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Cart