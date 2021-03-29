import React from 'react';
import styled from 'styled-components';



const  HeaderBadge = () => {
    return (
        <HeadBadge>
            <div>
            <h4>AUSTRALIA STOCK | FAST &FREE SHIPPING | LOCAL WARRANTY |FULL SUPPORT</h4>
           
            </div>
        </HeadBadge>
      
    )
};

const HeadBadge = styled.div`

 background-color: rgba(0,0,0,0.8);
 width: 96vw;

text-align: left;
justify-text: justify;
position: sticky;
top: 0px;
z-index: 1;
border: solid green 1px;


h4{
 color: white;
 padding: 0.5rem;

}




@media only screen and (min-width: 800px) {

background-color: rgba(0,0,0,0.8);
width: 100%;
text-align: center;
min-height: 5rem;
position: sticky;
top: 0px;
z-index: 1;
h4{
 color: white;
 padding: 2.5rem;
}

`

export default HeaderBadge;