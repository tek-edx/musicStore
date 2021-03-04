import React, { useState } from 'react';
import faqs from '../testdata/faq'

function FAQ( {question, answer}) {

    const [showAnswer,setShowAnser] = useState(false);
  
    return (
        <>
       
         <ul className="container">
           
          
                       <li  >
                           <h5>{question}</h5>
                           <button  onClick={() => {setShowAnser(!showAnswer)}}>btn</button>
                           <p>{showAnswer ? answer : " "}</p>
                       </li>
                   
              

         
         </ul>

            
        </>
    )
    
}

export default FAQ
