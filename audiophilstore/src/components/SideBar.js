import React ,{useState,useEffect} from 'react';
import styled from 'styled-components';

import { FaAngleDoubleDown, FaAngleDoubleUp} from "react-icons/fa";
import { useGlobalContext } from '../context';




function SideBar({children}) {

    const {sortItems,hamburger} = useGlobalContext();

    const [catagoryStatus,setCatagoryStatus] = useState(true);
    const [iconClass,setIconClass] = useState("");


    useEffect(() => {
        if (catagoryStatus) {
            setIconClass('cat-icon-up');
        }else{
        setIconClass('cat-icon-down');
        }
        
        
    }, [catagoryStatus])

   const sortyItems = (e) =>{

    console.log(e.target.value)

   };

    
    return (
        <SidebarStyle>

            
            <div className= {hamburger? 'sidebar flex': 'sidebar show flex'}>

                <div className="catagory">
                    <div className="heading-icon">
                   <h3>Catagories </h3>
                    < FaAngleDoubleDown  className = {iconClass} onClick={()=>{
                        setCatagoryStatus(!catagoryStatus);
                       
                       }} 
                            style={{ color: 'white' }}/>
                    </div>
                    <div className="children">

                        {catagoryStatus ? children : ""}
                        
                        
                    
                    
                    </div>
                    
                </div>
                <div className='sort-item'>
                <h3> Sort By </h3>
                <select className="sort-item" onChange={(e) => sortItems(e.target.value)}>

                    
                    
                    <option value="high-first">High to Low</option>
                    <option value="low-first">Low to High</option>
                    <option value="rating">Rating</option>
                    <option value="new-item">New Arrival</option>
                    <option value="special">Special</option>

                    
                </select>

                </div>

                <div className="price-range-label">
                <div>
                    <h3>Price Range</h3>
                </div>

                <form className="price-range" >

                        <input   type="range" min="1" max="100" value="50" />

                <div class="slider" data-slider data-initial-start="3000" data-start="0" data-initial-end="75000" data-end="100000" data-step="100"> 
                <span class="slider-handle" data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput1"></span>
                <span class="slider-fill" data-slider-fill></span>
                <span class="slider-handle" data-slider-handle role="slider" tabindex="1" aria-controls="sliderOutput2"></span>
                </div>











                    <button type='submit'
                    style={{margin: '1rem',marginRight: 'auto',width: '5rem',height:'3rem',
                    borderRadius:'10px'}}> Go </button>

                </form>
                </div>




            </div>

            
        </SidebarStyle>
    )
}


const SidebarStyle = styled.div`

h3{
    color: white;
}

.sidebar{
 position: fixed;
 top: 10rem;
 left: 0rem;
 height: 0px;
 width: 0px;
 z-index: 1;
 overflow: hidden;
 transition: height 0.5s linear,width 0.5s linear;
background-color: rgba( 0,0,0,0.9);
 
  overscroll-behavior: none;
 
}



@media only screen and (max-width: 620px){

    .sidebar.show{
    overflow: hidden;
    margin: 1rem auto;
    width: 95vw;
    height: 100vh;

   overscroll-behavior: none;
   transition: height 0.5s linear,width 0.5s linear;
   
}

.side-bar.show.flex{
    display: flex;
    border: solid red 1px;
}

.sort-item{
    height: 2rem;
    width: 60%;
    
}

.price-range-label{
    margin-top: 2rem;
}

.price-range{
    display: flex;
    flex-direction: column;
    
    width: 60%;
}

}






@media only screen and (min-width: 800px){

grid-row: span 4;
position: sticky;
top: 11rem;
z-index: 0;

margin-bottom: auto;
display: initial;

.sidebar{
    position: initial;
    width: 100%;
    height: 100%;

}

.sidebar.flex{
    display: flex;
    flex-direction: column;
   
    height: 100%;
    justify-content: space-between;
    
}

.price-range-label{
    margin-top: 1rem;
}

.price-range{
    display: flex;
    flex-direction: column;
    

    
}



.price{
    height: 20px;
    width: 100px;
    margin: auto;
}

.catagory{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: space-between;
    
}

div.heading-icon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}

.cat-icon-up {
    transform: rotate(180deg);
    transition: transform 0.2s linear;
    
}

.cat-icon-down {
    transform: rotate(0deg);
    transition: transform 0.2s linear;
}

.children {
   
     animation: height 5s ease-in;
    min-height: 0px;
    max-height: auto;
   
    overflow: auto;

     transition: height 2s ease-in;
}

@keyframe height{

    0% { border: solid red 1px;}
    100% { border: solid green 1px;}

}
}
`





;



export default SideBar;
