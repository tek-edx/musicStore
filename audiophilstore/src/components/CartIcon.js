import React,{useEffect,useState} from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import '../css/cart.css';

function CartIcon() {

     const {cartItems,totalItem} = useGlobalContext();

   
    console.log(totalItem);
  

    const [badgeClass, setBadgeClass] = useState('cart-badge');
    
    
    
  
    
  
//    let cartItemsNumber = cartItems.length;
   
//    console.log(cartItemsNumber);

   useEffect(() =>{

    if(totalItem < 1 ) {
        // console.log(cartItemsNumber)
        setBadgeClass('cart-badge');
    }else{
        setBadgeClass('cart-badge show');
    }
    
    },[totalItem])

    return (
        <CartIconStyle>
        <div>
            <FaCartArrowDown style={{height: '2rem', width: '2rem',}} className='cart-icon' />
            <div className= {badgeClass}>
                
                {totalItem}
            </div>
            <div className="cart-modal">
                {
                    cartItems.map((item) => {
                        const {image,name,price} = item;
                        return (
                            <div style={{display: 'flex', justifyContent:'space-between',alignItems: 'center'}}>
                                <div><img src={image} alt={name} style={{height: '50px',width:'50px'}}/></div>
                                <div>
                                    <h4>{name}</h4>
                                </div>
                                <div>
                                <h4>{price}</h4></div>
                            </div>
                        )
                    })
                }

            </div>
        </div>

        </CartIconStyle>
    )}

    export const CartIconStyle = styled.div`

    color: rgba(0,0,0,0.7);
    
    .cart-badge{

        display: flex;
        justify-content: center;
        align-items:center;
        position: absolute;
        top:0px;
        right: 0px;
        height: 30px;
        width: 30px;
        border-radius: 50%;

        background-color: rgb(220,20,60,0.5);

       
        visibility: hidden;


        
    }

    .cart-badge.show{

       
          visibility: visible;
        
    }

    .cart-modal{
        position: absolute;
        top: 45px;
        right: 20px;
        height: 300px;
        width: 300px;
        border-radius: 5px;
        z-index: 1;
        background-color: slateblue;
        color:white;

        border: solid green 1px;
        visibility: hidden;

    }

    `
      

export default CartIcon
