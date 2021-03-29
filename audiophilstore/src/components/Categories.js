import React from 'react'
import { BsTextRight } from 'react-icons/bs';
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import specialData from "../testdata/special";






let itemCategories = [
    "All",
    ...new Set(specialData.map((item) => item.catagory)),
];



function Categories() {


    const {filterItem} = useGlobalContext();

    
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
flex-direction: row;
width: 98%;

background-color: rgba(0,0,0,0.9);
color: white;
margin: 0px auto;
margin-bottom : 2rem;
position: sticky;
top: 7.9rem;



a{
display:block;
font-size: 1.2rem;
margin: 0.5rem;
cursor: pointer;
color: white;
text-transform: capitalize;
}

a:hover{
    color: blue;
}

`


export default Categories
