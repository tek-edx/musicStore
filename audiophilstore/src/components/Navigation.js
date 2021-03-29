import React, {useState} from 'react';
import styled from 'styled-components';

import { GoThreeBars } from "react-icons/go";
import { AiOutlineClose} from "react-icons/ai";
import { useGlobalContext } from '../context';

function Navigation() {

    // const [hamburger,setHamburger] = useState(false);
     
    const { hamburger, hamburgerBoolean} = useGlobalContext();
    
    return (
        <NavigationStyle>
       <div>
                <nav >
         
            <ul className={hamburger ? 'active hamburger' : 'hamburger'} id="nav">
           
           
             <li className="nav-menu-item">Home</li>
             <li className="nav-menu-item">About Us</li>
             <li className="nav-menu-item">Contact Us</li>

            <li className="cross-icon"onClick={ hamburgerBoolean}>{hamburger ? <GoThreeBars />:< AiOutlineClose /> }</li>

         </ul>
       </nav>
    
    
      </div>


        </NavigationStyle>
    )
}

const NavigationStyle = styled.div`

position: sticky;
top: 8rem;
z-index: 2;
background-color: rgba(0,0,0,0.9);
color: white;

@media only screen and (max-width: 620px){

    .hamburger.active{
    display: flex;
    flex-wrap: no-wrap;
    list-style: none;
    justify-content: space-around;

    align-items: center;
    height: 3rem;
    margin-right: auto;


}

.active.hamburger{
    width: 2rem;


}
.nav-menu-item{

}


.active.hamburger .nav-menu-item{
    display: none;


}

}


@media only screen and (min-width: 800px){

    .hamburger.active,.hamburger{
        
        display:flex;
        justify-content: center;
        margin: 0px 2rem;
        list-style: none;
        height: 3rem;
        align-items: center;
    }

    .nav-menu-item{
        margin: 0px 8rem;
    }
    .cross-icon{
        visibility: hidden;
    }
}


`;
export default Navigation

