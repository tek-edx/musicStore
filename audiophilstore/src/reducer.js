import React, { useEffect } from "react";
import specialData from "./testdata/special";
import reviews from "./testdata/review";

function reducer(state, action) {
  const { catagory, index, review,itemNumber,cartItems } = state;
  
 

  const checkIndex = (indexNumber) => {
    if (indexNumber > reviews.length - 1) {
      return 0;
    }

    if (indexNumber < 0) {
      return reviews.length - 1;
    }
    return indexNumber;
  };

  if (action.type === "SET_REVIEW") {
    console.log(`I am index ${index}`);
    return { ...state, review: reviews[index] };
  }

  if (action.type === "REVIEW_RIGHT") {
    console.log(`I am index ${index}`);
    let newIndex = checkIndex(index + 1);

    return { ...state, index: newIndex };
  }

  if (action.type === "REVIEW_LEFT") {
    let newIndex = checkIndex(index - 1);
    return { ...state, index: newIndex };
  }

  if (action.type === "AUTO_REVIEW") {
    let newIndex = checkIndex(index + 1);
    return { ...state, index: newIndex };
  }

  if (action.type === "FILTER_ITEMS") {
    let newCatagoryItems = [];

    if (action.payroll === "All") {
      newCatagoryItems = [...specialData];
      console.log(newCatagoryItems);
    } else {
      newCatagoryItems = specialData.filter(
        (item) => item.catagory === action.payroll
      );
    }
  return { ...state, catagory: newCatagoryItems };
  }

    if (action.type === "INCREASE_ITEM") {
        let newItemNumber = itemNumber;
    
        console.log(` Action Payload ${action.payload}`);
        cartItems.map((cardItem) => {
            if(cardItem.id === action.payload){
                   newItemNumber = itemNumber + 1;
                 console.log(`New Item Number ${action.payload} , ${cardItem.id} ,${newItemNumber}`)
                return {...state, itemNumber: newItemNumber}
            } else {

                console.log(`New  Number ${action.payload} , ${cardItem.id} ,${itemNumber}`)

                return {...state}
            }
           
        })
       
        
        return { ...state}
       
    };
}

export default reducer;
