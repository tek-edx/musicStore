import React, { useState } from "react";
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import styled from "styled-components";
import { useGlobalContext } from "../context";

function HighlightItem() {
  const { featuredItems } = useGlobalContext();
  const [index, setIndex] = useState(0);

  console.log(featuredItems);

  // const [highlightItem,setHighlightItem] = useState(items[index])

  // const randomIndex = () => {
  //    let slider =  setInterval(() => {

  //         let newIndex = Math.floor(
  //             Math.random() * items.length )
  //             console.log(newIndex);

  //             if(newIndex === index && newIndex < items.lenght - 1){
  //                 newIndex++;

  //             }else{
  //                 setIndex(0);
  //             }
  //            setIndex((index) => {
  //                return newIndex;
  //            });

  //          clearInterval(slider);

  //     }, 10000);

  // }

  // randomIndex();
  return (
    <HighlightItems>
      <div className="highlight-main-container">
      <button>
        <BsFillCaretLeftFill className="arrow-left" />
      </button>

     <div className="section-center">

      {featuredItems.map((item,index) => {
        const { id, image } = item;
         
        return (
          
            <div key={index} className="highlight-items">
              <img src={image} className="highlight-image" />
           
            </div>
        );
         
      })}
      
          </div>
      <button>
        {" "}
        <BsFillCaretRightFill className="arrow-right" />
      </button>

      </div>
    </HighlightItems>

  );
}

const HighlightItems = styled.div`

highlight-main-container{
  position: relative;
  height: 60vh;

}

button{
  display: inline-block;
}

.section-center{

  display: flex;
  position: absolute;
  width: 100vw;
  overflow: hidden;
  top: 0px;
  
}


  
   
`;

export default HighlightItem;
