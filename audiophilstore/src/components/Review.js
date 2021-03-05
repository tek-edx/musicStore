import React from 'react';
import styled from 'styled-components';

function Review({review,leftClick,rightClick}) {
    console.log(review);

    const {id,name,job,image,text} = review;
    return (
     <ReviewStyle>
            <h4>What our costomer says!</h4>
            <div key={id}>
            <div className="image">
            <img src={image} alt={name}/>
            </div>
            <h4>{job}</h4>
            <p>{text}</p>

            <div className="btn-container">
                <button className="btn-left" 
               onClick={() =>leftClick()}>Left</button>

                <button className="btn-right" onClick={() => {rightClick()}}>Right</button>
            </div>

            </div>
        </ReviewStyle>
        
    )
}

const ReviewStyle = styled.div`


width: 60vw;
height: 60vh;
margin: auto;
border: solid green 1px;
text-align: center;
margin: 5rem auto;
background-color: lime;

.image{
width: 150px;
height: 150px;
 border-radius : 50%;
 background-color: slateblue;
margin: auto;
}
img{
    width: 98%;
    border-radius : 50%;
    
}

`
export default Review;
