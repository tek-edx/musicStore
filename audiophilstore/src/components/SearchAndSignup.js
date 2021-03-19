

import React from 'react'
import '../css/search&signup.css'
import styled from 'styled-components';

import CartIcon from './CartIcon';


function SearchAndSignup() {
    return (
        <SearchSignup>
        <div className = 'wrapper'>
            
            <input type="text" placeholder="Product Search" className="search-bar" style={{height: '3rem', marginLeft: '1.2rem'}} />
            <p className='log-in'>Log In</p>
            <p>Sign Up</p>
            <CartIcon />
             

        </div>
        </SearchSignup>
    )
}

const SearchSignup = styled.div`

width: 98%;
position: sticky;
top: 4rem;
margin: auto;
z-index: 2;

.wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    background-color: whitesmoke;
    
}

.wrapper * {
    margin-right: 0.5rem;
}

.search-bar {
    width: 60%;
    
}

.log-in {
    margin-left: auto;
    
}

input{
    background-color: whitesmoke;
    font-size: 1.5rem;
    margin: 0.5rem auto;
}



`

export default SearchAndSignup
