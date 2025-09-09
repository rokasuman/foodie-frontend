import React, { useContext } from 'react'
import "./PlaceOder.css"
import { StoreContext } from '../../context/StoreContext'

const PlaceOder = () => {
  const{getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-field">
          <input type='text' placeholder='First name'/>
          <input type='text' placeholder='Last name' />
        </div>
         <input type='email' placeholder='email address'/>
         <input type='text' placeholder='street'/>
         <div className="multi-field">
          <input type='text' placeholder='city'/>
          <input type='text' placeholder='state' />
        </div>
        <div className="multi-field">
          <input type='text' placeholder='zip code'/>
          <input type='text' placeholder='countr y' />
        </div>
        <input type='number' placeholder='number'/>

      </div>

      <div className="place-order-right">
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
          <button > PROCEED TO PAYMENT</button>
        </div>

      </div>

    </form>
  )
}

export default PlaceOder