import React, { useEffect } from "react";
import specialData from "./testdata/special";
import reviews from "./testdata/review";

function reducer(state, action) {
  const { catagory, index, review } = state;

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

    console.log(`Filter activated`);
    // console.log(newCatagoryItems);

    console.log(newCatagoryItems);
    // setCatagory(newCatagoryItems);
    return { ...state, catagory: newCatagoryItems };
  }
}

export default reducer;
