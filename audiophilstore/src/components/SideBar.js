import React ,{useState} from 'react';
import styled from 'styled-components';

import { FaAngleDoubleDown, FaChevronDown } from "react-icons/fa";




function SideBar({children}) {

    const [catagoryStatus,setCatagoryStatus] = useState(false);

    
    return (
        <SidebarStyle>

            
            <div className="sidebar flex">

                <div className="catagory">
                    <div className="heading-icon">
                   <h3>Catagories </h3>
                    < FaAngleDoubleDown onClick={()=>{
                        setCatagoryStatus(!catagoryStatus)
                    }} />
                    </div>
                    <div className="children">

                        {catagoryStatus ? children : ""}
                    
                    
                    </div>
                    
                </div>
                <div className='sort-item'>
                <h3> Sort By </h3>
                <select className="sort-item">
                    
                    <option value="high-first">High to Low</option>
                    <option value="low-first">Low to High</option>
                    <option value="rating">Rating</option>
                    <option value="new-item">New Arrival</option>
                    <option value="Special">Special</option>

                    
                </select>

                </div>

                <div className="price-range-label">
                <div>
                    <h3>Price Range</h3>
                </div>

                <form className="price-range" >

                    <input type="text" className='price min-price' placeholder="Lowest" />
                    <input type="text" className="price max-price"
                    placeholder= "highest"/>
                    <button type='submit'> Go </button>

                </form>
                </div>




            </div>

            
        </SidebarStyle>
    )
}


const SidebarStyle = styled.div`
grid-row: span 4;
position: sticky;
top: 15rem;

margin-bottom: auto;

.sidebar.flex{
    display: flex;
    flex-direction: column;
   
    height: 100%;
    justify-content: space-between;
    
}

.price-range{
    display: flex;
    
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
}



`





;



export default SideBar;
