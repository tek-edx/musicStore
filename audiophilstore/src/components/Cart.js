import React,{useState} from 'react';
import styled from 'styled-components';
import "../css/cartIcon.css";
import CartIcon from './CartIcon';
import {useGlobalContext} from '../context'


import PaymentForm from './PaymentForm';


import { RiArrowUpSLine, RiArrowDownSLine  } from "react-icons/ri";

function Cart() {

   

    const { increaseItemNumber, decreaseItemNumber,itemNumber,removeItem,cartItems,totalPrice,itemPriceTotal} = useGlobalContext();
    

   


   
      
    return (
        <CartStyle>
            <div style={{
               
                display: 'flex',
                justifyContent: 'flex-end',
                height: '50px',
                marginRight: '10px',
        }} >
            <CartIcon />
            </div>

           
        <div className='cart-body'> 

         
           
    
          <div className="cart-items">
            {
            cartItems.map((item,index) => {
                const { id,image, name, price,amount} = item;
                return (
                    <div className="cart-grid" key={id}>
                <div className="cart-image">
                    <img src={image} alt=""/>
                </div>
                <div className="cartItem-description">
                <h3>{name}</h3>
                <h4>{price}</h4>
                 <button onClick={() =>  {removeItem(id)}}>Remove Item</button>
               </div>

                        <div className="amount" >
                            <div className="number increase">
                                <RiArrowUpSLine
                                
                                onClick = {() => {
                                increaseItemNumber(id)
                                }}
                                /></div>
                   {amount}
                   <div className="number decrease">
                                    <RiArrowDownSLine

                                    onClick={() => {
                                        decreaseItemNumber(id)
                                    }}
                                 /></div>
               </div>

               <div className="total item-amount">
                   {price * amount}
               </div>
            
           
               
            </div>)
            })
            }

      </div>

       <div className="cart-items-payment">
           <h3>Payment</h3>

           <PaymentForm />

           <button className="payment-submit" type='submit'> Pay {totalPrice}</button>
       </div>
           
        </div>

     
        </CartStyle>
    )
}


const CartStyle = styled.div`

.cart-body{
    display: flex;
    
    
}

.cart-items{
    width: 70%;
}

.cart-items-payment{
    display: flex;
    flex-direction: column;
   
   background: linear-gradient(30deg, hsla(24, 5%, 37%, 1) 0%, hsla(320, 18%, 90%, 1) 00%, hsla(0, 0%, 98%, 1) 10%);
    justify-content: flex-start;
    border-radius: 20px;
    
    align-items: center;
    width: 25%;
    height: 500px;
    
   
}



.cart-grid {
    display:grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-template-rows: 120px;
    justify-items: center;
    align-items: center;
    width: 100%;
    
}


.cart-image{

    height: 100px;
    width: 100px;
    
    
    
    

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;

    }
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

.amount{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.payment-display{
    width: 80%;
     grid-area: 5 / 1 /6 /4
    border: solid red 1px;
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


`

export default Cart
