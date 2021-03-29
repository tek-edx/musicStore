import React, { useState } from "react";
import styled from "styled-components";
import "../css/cartIcon.css";
import CartIcon from "./CartIcon";
import { useGlobalContext } from "../context";

import PaymentForm from "./PaymentForm";

import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

function Cart() {
  const [paymentType, setPaymentType] = useState("Card");
  const [firstName,setFirstName] = useState('');
  const [secondName,setSecondName] = useState('');
  const [mobileNumber,setMobileNumber] = useState('0')
  const [address,setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const {
    increaseItemNumber,
    decreaseItemNumber,
    itemNumber,
    removeItem,
    cartItems,
    totalPrice,
    itemPriceTotal,
  } = useGlobalContext();

  return (
    <CartStyle>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          height: "50px",
          marginRight: "10px",
        }}
      >
        <div className="cart-icon">
          <CartIcon />
        </div>
      </div>

      <div className="cart-body">
        <div className="cart-items">
          {cartItems.map((item, index) => {
            const { id, image, name, price, amount } = item;
            return (
              <div className="cart-grid" key={id}>
                <div className="cart-image">
                  <img src={image} alt="" />
                </div>
                <div className="cartItem-description">
                  <h3>{name}</h3>
                  <h4>{price}</h4>
                  <button
                    onClick={() => {
                      removeItem(id);
                    }}
                  >
                    Remove Item
                  </button>
                </div>

                <div className="amount">
                  <div className="number increase">
                    <RiArrowUpSLine
                      onClick={() => {
                        increaseItemNumber(id);
                      }}
                    />
                  </div>
                  {amount}
                  <div className="number decrease">
                    <RiArrowDownSLine
                      onClick={() => {
                        decreaseItemNumber(id);
                      }}
                    />
                  </div>
                </div>

                <div className="total item-amount">{price * amount}</div>
              </div>
            );
          })}
        </div>

        

        

        <form className="cart-items-payment" onSubmit={handleSubmit}>
           
           <h3>Delivary Detail</h3>

          <label htmlFor="first-name">First Name 
            <input type="text"
            value={firstName}
            onChange={(e) => {setFirstName(e.target.value)}}
             />
          </label>
        
          <label htmlFor="last-name">Last Name 
            <input type="text"
            value={secondName}
            onChange={(e) => setSecondName(e.target.value)} />
          </label>
         

          <label htmlFor="mobile-number">Mobile 
            <input type="tel" 
            value={mobileNumber}
            onChange={(e) => { setMobileNumber(e.target.value)}}/>
          </label>
         

          <label htmlFor="address">Address 
            <input type="text" 
            value={address}
            onChange={(e) => setAddress(e.target.value)}/>
          </label>
         

          
          <h3>Payment</h3>

          <article className="payment">

          <secton className="paypal-payment">
          
            
            <input

              type="radio"
              name="payment"
              id="paypal"
              checked={paymentType === 'paypal'}
              value= 'paypal'
              onChange={(e) => {setPaymentType(e.target.value)}}
            /> 
            <label htmlFor="paypal">Paypal  </label>

          </secton>

          <section className="stripe-payment">
           

          <input
            type="radio"
            name="payment"
            id="stripe"
              checked={paymentType === 'stripe'}
              value='stripe'
              onChange={(e) => { setPaymentType(e.target.value) }}
          /> 
            <label htmlFor="stripe" >  Stripe</label>
          </section>
          

          <section className="card-payment">
         
           
                     
           <input type="radio" name="payment" id="card"
              checked={paymentType === 'card'}
              value='card'
              onChange={(e) => { setPaymentType(e.target.value) }} />

            <label htmlFor="card"> Card   </label>
            </section>

            
            <div className={paymentType === 'card' ? 'payment-form show': 'payment-form'}>
             <PaymentForm  />
            </div>
          
          
          </article>
      

         
          <button className="payment-submit" type="submit">
            {" "}
            Pay {totalPrice}
          </button>
        </form>
      </div>

      <button className="payment-modal-button">Payment</button>
    </CartStyle>
  );
}

const CartStyle = styled.div`

.cart-body{
    display: flex;
    border: solid red 1px;
    justify-content: space-around;
    
}

.cart-grid:nth-child(even){
    background-color: grey;
}

.cart-grid:nth-child(odd){
    background-color: whitesmoke;
     
}

.cart-grid {
    display:grid;
    grid-template-columns: 2fr 2fr 1fr 1fr ;
    grid-template-rows: 120px;
    justify-items: center;
    align-items: center;
    
    
}

h3{
 width: 90%;
 margin: 1rem auto;
}



.cart-image{

    height: 100px;
    width: 100px;
    margin-right: 5px;
     img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;


    }
}

.cart-icon {
    
    margin-top: 0.5rem;
    margin-right: 0.8rem;
}

.cart-badge{
    
    margin-right: 1rem;
}
.cartItem-description{

    display: flex;
    flex-direction: column;
    
    align-items: flex-start;
    justify-self: start;
    
    

}

.cartItem-description *{
    margin:0;
    padding: 0
}



.payment-modal-button{
    width: 100%;
    height: 5rem;
    background-color: green;
    color: white;
    border-radius: 10px;
    margin-top: 0.5rem;
    box-shadow: 1px 1px 9px 4px green;

}



.cart-items-payment{

    display: none;


}

@media only screen and (min-width: 760px){


.cart-items-payment{
    display: flex;
    flex-direction: column;
     background: linear-gradient(30deg, hsla(24, 5%, 37%, 1) 0%, hsla(320, 18%, 90%, 1) 00%, hsla(0, 0%, 98%, 1) 10%);
    justify-content: flex-start;
    border-radius: 20px;

    align-items: center;
    width: 40%;
    height: 70vh;
}

label{
  margin-right: auto;
}

input{
  height:1rem;
  margin:0.5rem ;
  border: solid red   1px;
  width: 90%;


}




.payment-submit{
    margin-top: 2rem;
    height: 50px;
    width: 100px;
    border-radius: 20px;
   background: linear-gradient(90deg, hsla(152, 100%, 50%, 1) 0%, hsla(186, 100%, 69%, 1) 100%);
    color: white;
    border:none;
    box-shadow: 1px 2px 5px black;


}

.payment-display{
    width: 80%;
     grid-area: 5 / 1 /6 /4
    
}

.amount{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.payment-modal-button{
    display: none;
}

.card-payment, .stripe-payment , .paypal-payment{
  display: flex;
  
  width: 100px;
  justify-content: flex-start;
  border: solid green 1px;
  align-items: center;
}

.payment{
  display: flex;
  flex-direction: column;
  
  width: 100%
  

}
.payment-form{
  border: solid red 1px;
  height: 0px;
  overflow: hidden;
  transition: height 2s linear;
}





.payment-form.show{
  height: 350px;

  transition: height 2s linear;
}




 input[type='radio']{
  
  
  height: 3rem;
  

 }


}

@media only screen and (min-width: 820px){

.cart-body{
    width: 98vw;
    margin: auto;
}

.cart-items{
    width: 60%;
}

.cart-items-payment{
    width: 38%;
}

// *********Media Queary for the 1024 and up width*********** 

@media only screen and (min-width: 1024px){

.cart-body{
    width: 98vw;
    margin: auto;
}

.cart-items{
    width: 60%;
}

.cart-items-payment{
    width: 30%;
}

.payment-modal-button{
    display: none;
}



}


`;

export default Cart;
