

import React,{useRef,useState} from 'react'
import '../css/search&signup.css'
import styled from 'styled-components';
import CartIcon from './CartIcon';
import { useGlobalContext } from '../context';
import data from '../testdata/special';



function SearchAndSignup() {

    const {cartItems,searchItem,searchTerm}   = useGlobalContext();

    
   
    

   
    return (
        <SearchSignup>
        <div className = 'wrapper'>

           
            
            <input type="text" 
            value={searchTerm}
           
            placeholder="Product Search" className="search-bar" style={{height: '3rem', marginLeft: '1.2rem'}} 
            onChange={(e) => {
                searchItem(e)
            }}/>
            <p className='log-in'>Log In</p>
            <p>Sign Up</p>
            <CartIcon />
             

        </div>
        </SearchSignup>
    )
}

const SearchSignup = styled.div`


width: 100%;
position: sticky;
top: 4rem;
margin: auto;
z-index: 2;

.wrapper{
    display: flex;
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












// @media only screen and (min-width: '800px') {


// width: 98%;
// position: sticky;
// top: 4rem;
// margin: auto;
// z-index: 2;

// .wrapper{
//     display: flex;
    
//     justify-content: space-between;
//     align-items: center;
//     background-color: whitesmoke;

// }

// .wrapper * {
//     margin-right: 0.5rem;
// }

// .search-bar {
//     width: 60%;

// }

// .log-in {
//     margin-left: auto;

// }

// input{
//     background-color: whitesmoke;
//     font-size: 1.5rem;
//     margin: 0.5rem auto;
// }

  

// }




`

export default SearchAndSignup
