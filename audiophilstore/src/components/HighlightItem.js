import React ,{useState} from 'react';
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import styled from 'styled-components';



function HighlightItem({items}) {
    const [index,setIndex] = useState(0);
    const [highlightItem,setHighlightItem] = useState(items[index])

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

    const {image} = items[index]


   

    // randomIndex();
    return (
        <HighlightItems>
        <div>
        <div className="highlight-items">
            <div><BsFillCaretLeftFill  className='arrow-left'/></div>
            <img src={image} className="highlight-image"/>
            <div><BsFillCaretRightFill className='arrow-right'/></div>
        </div>
        </div>
        </HighlightItems>
    )
}

const HighlightItems = styled.div`
 
.highlight-items{
     display: flex;
     place-items: center;
     place-content: center;
 }

.highlight-image{
    width: 98%;
    height: 500px;
    object-fit: contain;
    object-position: 50%;
}

.arrow-right,.arrow-left {
    color: rgba(0,0,0,0.5);
}
.arrow-right {
    height: 50px;
    width: 50px;

}
.arrow-left {
    height: 50px;
    width: 50px;

}
`

export default HighlightItem;
