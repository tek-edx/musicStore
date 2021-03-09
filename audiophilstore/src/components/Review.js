import React from 'react';
import styled from 'styled-components';
import { FaChevronCircleLeft, FaChevronCircleRight} from "react-icons/fa";

function Review({review,leftClick,rightClick}) {
    console.log(review);

    const {id,name,job,image,text} = review;
    return (
     <ReviewStyle>
            

            <div className="review-flex">

                <button 
                    onClick={() => leftClick()}><FaChevronCircleLeft className="btn-left" /></button>
                <div className="info">
                <h4>What our costomer says!</h4>
                <div key={id}>
                    <div className="image">
                        <img src={image} alt={name} />
                    </div>
                    <h4>{job}</h4>
                    <p>{text}</p>

                    </div>
                    </div>

                <button onClick={() => { rightClick() }}><FaChevronCircleRight className="btn-right"  /></button>
            </div>

        
        </ReviewStyle>
        
    )
}

const ReviewStyle = styled.div`


width: 98%;
height: 80vh;
margin: auto;

display: flex;
align-items: center;
justify-content: center;

text-align: center;
margin: 0px auto;
margin-top: 5rem;
background-color: rgba(0,0,0,0.8);
color: white;
font-size: 1.2rem;

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
.review-flex {
    display: flex;
    align-items: center;
    
}

button {
    background: none;
    border: none;
}

.info{
    width: 500px;
    margin: auto;
    
}
 .btn-right,.btn-left{
    
    height: 50px;
    width: 50px;
    display: none;
    
    
}

div:hover {

.btn-right,.btn-left{

    height: 50px;
    width: 50px;
    display: inherit;
    color: white;
    
    
    
}
}

p{
    text-align: justify;
}
`
export default Review;
