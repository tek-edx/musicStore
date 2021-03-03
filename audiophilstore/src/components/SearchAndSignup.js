

import React from 'react'
import '../css/search&signup.css'

import Cart from './Cart';


function SearchAndSignup() {
    return (
        <div className = 'wrapper'>
            
            <input type="text" placeholder="Product Search" className="search-bar" style={{height: '3rem', marginLeft: '1.2rem'}} />
            <p className='log-in'>Log In</p>
            <p>Sign Up</p>
            <Cart />
             

        </div>
    )
}

export default SearchAndSignup
