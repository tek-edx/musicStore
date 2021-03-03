import React from 'react';
import '../css/special.css';

const Product = ({items}) => {

    const { image, name, review, price } = items;
    return (
    
        <div className="special-card">
        <img src={image} alt={name}/>
        <h1>{name}</h1>
        <h3>{review}</h3>
        <h4>{price}</h4>
        </div>
        
    )
    
};

export default Product
