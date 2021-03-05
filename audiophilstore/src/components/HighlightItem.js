import React ,{useState} from 'react';
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import styled from 'styled-components';
import '../css/highlight.css';


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
        <div className="highlight-item">
            <div><BsFillCaretLeftFill  className='arrow-left'/></div>
            <img src={image} />
            <div><BsFillCaretRightFill className='arrow-right'/></div>
        </div>
        </div>
        </HighlightItems>
    )
}

const HighlightItems = styled.div`
 


`

export default HighlightItem;
