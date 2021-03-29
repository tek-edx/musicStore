import React from "react";

import HeaderBadge from "../components/HeaderBadge";

import Product from "../components/Product";
import HighlightItem from "../components/HighlightItem";
import SearchAndSignup from "../components/SearchAndSignup";
import Categories from "../components/Categories";
import Navigation from "../components/Navigation";
import SideBar from "../components/SideBar";

import Review from "../components/Review";
import Subscription from "../components/Subscription";

import Footer from "../components/Footer";

import specialData from "../testdata/special";
import { useGlobalContext } from "../context";

import styled from "styled-components";

import "../css/special.css";

function Home() {
  const {catagory,data } = useGlobalContext();

  

  return (
    <div>
      <HeaderBadge />

      {/* <HighlightItem /> */}
      <SearchAndSignup />

      <Navigation />

      <div className="special-item-grid">
        <SideBar>
          <Categories />
        </SideBar>

        {catagory.map((specialItem) => {
          const { id } = specialItem;
          return <Product key={id} items={specialItem} />;
        })}
      </div>

      <Review />

      <Subscription />
      <Footer />

      <ProductPageStyle>
        <div></div>
      </ProductPageStyle>
    </div>
  );
}

const ProductPageStyle = styled.div`

   position: absolute;
    top: 120%;
    left: 1%;
    height: 98vh;
    width: 98vw;
    margin: auto;
   display: flex;
   z-index: 5;
   align-items: center;
  
    background-color: green;
    visibility: hidden;
}

`;
export default Home;
