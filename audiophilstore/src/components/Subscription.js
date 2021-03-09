import React from 'react';
import styled from 'styled-components';

function Subscription() {
    return (
        <SubscriptionStyle>
            <form>
             <input type="email" placeholder="email." />
             <button type='submit'>Subscribe</button>

            </form>
            
        </SubscriptionStyle>
    )
}

const SubscriptionStyle = styled.form`
width: 98%;
height: 50vh;
margin: 0px auto;
display: flex;
justify-content: center;
align-items: center;
background-color: whitesmoke;

input{
    height: 3rem;
    width: 50rem;
    padding: 0;
    margin-right: 1rem;
    border: black solid 1px;
    border-radius: 10px;
   

}

button{
    height: 3rem;
    border: none;
    background-color: green;
    color: white;
    
}


`

export default Subscription
