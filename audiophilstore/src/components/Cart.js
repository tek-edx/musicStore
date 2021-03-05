import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import '../css/cart.css';

function Cart() {
    return (
        <div>
            <FaCartArrowDown style={{height: '2rem', width: '2rem',}} className='cart-icon' />
        </div>
    )
}

export default Cart
