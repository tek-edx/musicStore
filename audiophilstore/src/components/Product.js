import React, { useState, useRef, useEffect } from "react";
import "../css/special.css";
import styled from "styled-components";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import Stars from "./Stars";
import SaleBadge from "./SaleBadge";


let cartItems = localStorage.setItem('cartList', JSON.stringify([]));

let cartItem = [];

const Product = ({ items }) => {
  let screenClass = "";
  let buttonShow = "";

  const [hover, setHover] = useState(false);
  const [cartHover, setCartHover] = useState(false);
  const [infoHover, setInfoHover] = useState(false);
  

  const cartCircle = useRef(null);
  const infoCircle = useRef(null);

 

  useEffect(() => {
    if (cartHover) {
        cartCircle.current.childNodes[0].style.color = 'rgba(123, 239, 178, 1)';
    } else {
      cartCircle.current.childNodes[0].style.color = "inherit";
    }

    if (infoHover) {
      infoCircle.current.childNodes[0].style.color = `green`;
    } else {
      infoCircle.current.childNodes[0].style.color = `inherit`;
    }
  }, [cartHover, infoHover]);

  if (hover) {
    screenClass = "screen show";
    buttonShow = "product-page-div show";
  } else {
    screenClass = "screen";
    buttonShow = "product-page-div";
  }


    const addOnCart = (imgArg,nameArg, priceArg) => {

        cartItem.push({image:imgArg,name:nameArg, price:priceArg });
        localStorage.setItem('cartList', JSON.stringify(cartItem));
    }
    

  const { image, name, review, price, onSale, salePrice } = items;

    

return (
    <ProductStyle>
      <div
        className="special-card"
        onMouseOver={() => {
          setHover(true);
        }}
        onMouseOut={() => {
          setHover(false);
        }}
      >
        <div className={screenClass}>
          <div ref={infoCircle}>
            <FaInfoCircle
              style={{ margin: "1rem", height: "30px", width: "30px" }}
              onMouseOver={() => {
                setInfoHover(true);
              }}
              onMouseOut={() => {
                setInfoHover(false);
              }}
              
            />
           
          </div>

          <div ref={cartCircle}>
            <FaShoppingCart
              style={{ margin: "1rem", height: "30px", width: "30px" }}
              onMouseOver={() => {
                setCartHover(true);
              }}
              onMouseOut={() => {
                setCartHover(false);
              }}
              onClick={() => {
                  addOnCart(image,name,price)
            }}
            >
                
        
        </FaShoppingCart>
          </div>
        </div>
        {onSale && <SaleBadge />}

        <img src={image} alt={name} />
        <h4>{name}</h4>
        <Stars review={review} />
        <h4>
          {onSale ? (
            <div>
              <del style={{ color: "red" }}>{price}</del> <ins>{salePrice}</ins>{" "}
            </div>
          ) : (
            <div>{price}</div>
          )}
        </h4>

        <div className={buttonShow}>
          {" "}
          <button className="product-page-btn">Product Page</button>
        </div>

           
      </div>

      
    </ProductStyle>
  );
};

const ProductStyle = styled.div`
`;

export default Product;
