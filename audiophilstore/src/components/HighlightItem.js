import React ,{useState} from 'react';
import { BsFillCaretRightFill } from "react-icons/bs";
import { BsFillCaretLeftFill } from "react-icons/bs";
import '../css/highlight.css';


function HighlightItem({items}) {
    const [index,setIndex] = useState(0);
    // const [highlightItem,setHighlightItem] = useState(items[index])

    // const randomIndex = () => {
    //     setInterval(() => {

    //         let newIndex = Math.floor(
    //             Math.random() * items.length )
    //             console.log(newIndex);
    //         setIndex(newIndex);

    //     }, 5000)
    // }

    const {image} = items[index]


   

    // randomIndex();
    return (
        <div className="highlight-item">
            <div><BsFillCaretLeftFill  className='arrow-left'/></div>
            <img src={image} />
            <div><BsFillCaretRightFill className='arrow-right'/></div>
        </div>
    )
}

export default HighlightItem;
