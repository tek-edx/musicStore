import React, { useState, useRef, useEffect } from "react";
import "../css/special.css";
import styled from "styled-components";
import { FaInfoCircle, FaShoppingCart } from "react-icons/fa";
import Stars from "./Stars";
import SaleBadge from "./SaleBadge";
import { useGlobalContext } from "../context";

if (localStorage.getItem("cartList") === null) {
  localStorage.setItem("cartList", JSON.stringify([]));
}

let cartItem = [];

const Product = ({ items }) => {
  let screenClass = "";
  let buttonShow = "";

  const { itemAmount,addOnCart } = useGlobalContext();

  const [hover, setHover] = useState(false);
  const [cartHover, setCartHover] = useState(false);
  const [infoHover, setInfoHover] = useState(false);

  const cartCircle = useRef(null);
  const infoCircle = useRef(null);

  useEffect(() => {
    if (cartHover) {
      cartCircle.current.childNodes[0].style.color = "rgba(123, 239, 178, 1)";
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

  useEffect(() => {
    cartItem = JSON.parse(localStorage.getItem("cartList"));

    console.log(cartItem);
  }, []);

  useEffect(() => {

  },[cartItem])

  // const addOnCart = (
  //   idArg,
  //   imgArg,
  //   nameArg,
  //   priceArg,
  //   reviewArg,
  //   onSaleArg,
  //   salePriceArg
  // ) => {
    // const result = Array.from(
    //   new Set(
    //     cartItem.map((item) => {
    //       return item.id;
    //     })
    //   )
    // );

    // if (result.includes(idArg)) {
    //   cartItem.map((item, index) => {
    //     if (item.id === idArg) {
    //       let newAmount = cartItem[index].amount;
    //       cartItem[index].amount = newAmount + 1;
    //       console.log(cartItem[index].amount);
    //     }
    //   });

    //   //   existingItem['amount'] = amount + 1;

    //   localStorage.setItem("cartList", JSON.stringify(cartItem));
    // } else {
    //   cartItem.push({
    //     id: idArg,
    //     image: imgArg,
    //     name: nameArg,
    //     price: priceArg,
    //     review: reviewArg,
    //     onSale: onSaleArg,
    //     salePrice: salePriceArg,
    //     amount: 1,
    //   });
    //   localStorage.setItem("cartList", JSON.stringify(cartItem));
    // }
  // };

  //  .map((id) => {

  //    let item = cartItem.find((item) => item.id == id)
  //    return {
  //      item
  //    }
  //  })

  //  console.log(result);

  const { id, image, name, price, review, onSale, salePrice } = items;

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
                addOnCart(id, image, name, price, review, onSale, salePrice);
              }}
            ></FaShoppingCart>
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
