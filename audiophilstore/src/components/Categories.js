import React from 'react'
import { BsTextRight } from 'react-icons/bs';
import styled from 'styled-components';

function Categories({itemCategories,filterItem}) {


    console.log(itemCategories);
    return (
        <WrapCatagory>
        <div>
        {
              itemCategories.map((item,index) => {
                return (
                 
                   <a key={index} type="button" onClick={() => filterItem(item)}> {item} </a>
                
                    
                )
            })

        }

        </div>
        </WrapCatagory >
    
    )
}


const WrapCatagory = styled.div`
display: flex;
align-items: center;
background-color: whitesmoke;
height: 5rem;
margin-left: 1rem;
position: sticky;
top: 9rem;



a{
display: inline-item
font-size: 1.5rem;
margin: 0.5rem;
cursor: pointer;
color: slateblue;
text-transform: capitalize;
}

a:hover{
    color: blue;
}

`


export default Categories
