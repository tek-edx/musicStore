import React, {useState} from 'react';
import styled from 'styled-components';

function Navigation() {

    const [hamburger,setHamburger] = useState(false);
     
    
    return (
        <NavigationStyle>
       <div>
                <nav className={hamburger ? 'active' : ''}   id="nav">
           <ul>
               <li><a href=""></a></li>
                    <li><a href="">Home</a></li>
                    <li><a href="">About </a></li>
                    <li><a href="">Contact</a></li>
           </ul>
           <button className="icon" onClick={() => {setHamburger(!hamburger) }}>
               <div className="line line1"></div>
               <div className="line line2"></div>
           </button>
       </nav>
            </div>


        </NavigationStyle>
    )
}

const NavigationStyle = styled.div`

display: flex;
align-items: center;



border-radius: 3px;
box-shadow: 0 2px 5px rgba(0,0,0,0.3);
position: sticky;
top: 7.8rem;
z-index: 5;
width: 80px;


.active {
    width: 350px;
    background: white;
    border: solid black 1px;
}

nav ul {
    display:flex;
    list-style: none;
    width: 0px;

}

nav.active {
    
   width: 100%;
}

nav ul li {
    transform: rotateY(0deg);
    opacity: 0;
    transition: transform 0.6 linear, opacity 0.6 linear;

}

nav.active ul li {
    opacity: 1;
    transform: rotateY(360deg);
}

nav ul a {
    postion: relative;
    color: black;
    text-decoration: none;
    margin: 0 10px;
}

.icon {
    background-color: white;
    border: none;
    cursor:pointer;
    padding: 0;
    position: relative;
    height: 30px;
    width: 30px;
}

.icon:focus{
    outline: 0;
}

.icon .line {
    background-color: #5290f9;
    height: 2px;
    width: 20px;
    position: absolute;
    top: -29px;
    left: 10px;
    transition: transform 0.6 linear;
}

.icon .line2 {
    top: auto;
    bottom: 50px;
}

nav.active .icon .line1 {
    transform: rotate(-765deg) translateY(3.5px);
}

nav.active .icon .line2 {
    transform: rotate(765deg) translateY(-3.5px);
}

`;
export default Navigation

