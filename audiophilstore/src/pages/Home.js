
import React, { useState, useEffect } from "react";

import HeaderBadge from '../components/HeaderBadge';

import Product from "../components/Product";
import HighlightItem from "../components/HighlightItem";
import SearchAndSignup from "../components/SearchAndSignup";
import Categories from "../components/Categories";
import SideBar from '../components/SideBar' ;

import Review from "../components/Review";
import Subscription from '../components/Subscription';


import Footer from "../components/Footer";

import specialData from "../testdata/special";

import reviews from "../testdata/review";

import "../css/special.css";


let itemCategory = [
    "All",
    ...new Set(specialData.map((item) => item.catagory)),
];

function Home() {

    const [catagory, setCatagory] = useState(specialData);

    const [index, setIndex] = useState(0);
    const [review, setReview] = useState(reviews[index]);

    const checkIndex = (indexNumber) => {
        if (indexNumber > reviews.length - 1) {
            return 0;
        }

        if (indexNumber < 0) {
            return reviews.length - 1;
        }
        return indexNumber;
    };

    useEffect(() => {
        setReview(reviews[index]);
    },[index]);

    useEffect(() => {
        let slider = setInterval (() => {
           let newIndex = checkIndex(index + 1);
           setIndex(newIndex);
         setReview(reviews[index])
        },3000);
        return () => clearInterval(slider);
    },[index]);

    const reviewLeftButton = () => {
        setIndex((index) => {
            index = index - 1;
            let newIndex = checkIndex(index);
            return newIndex;
        });
    };

    const reviewRightButton = () => {
        setIndex((index) => {
            index = index + 1;
            let newIndex = checkIndex(index);
            return newIndex;
        });
    };

    const filterItem = (catagory) => {
        console.log(catagory);
        if (catagory === "All") {
            setCatagory(specialData);
            return;
        }

        let newCatagoryItems = specialData.filter(
            (item) => item.catagory === catagory
        );
        console.log(newCatagoryItems);
        setCatagory(newCatagoryItems);
    };

    return (
        <div>
            <HeaderBadge />

            <HighlightItem items={specialData} />
            <SearchAndSignup />

           
            <div className="special-item-grid">

                <SideBar>
                    
                    <Categories itemCategories={itemCategory} filterItem={filterItem} />
                    

                    
                </SideBar >

                {catagory.map((specialItem) => {
                    const { id } = specialItem;
                    return <Product key={id} items={specialItem} />;
                })}
            </div>

            <Review
                review={review}
                rightClick={reviewRightButton}
                leftClick={reviewLeftButton}
            />

            <Subscription />
            <Footer />
        </div>
    )
}

export default Home
