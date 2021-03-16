import React from 'react';
import {FaStar} from 'react-icons/fa';

function Stars({review}) {
    console.log(review);
    return (
        <div>
            {[...Array(review)].map((star)=> {
                return <FaStar  style={{color:'gold'}}/>
            })}
             </div>
    )
}

export default Stars
