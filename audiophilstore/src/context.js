import React, { useContext, useState, useEffect, useReducer } from "react";
import specialData from "./testdata/special";
import reviews from "./testdata/review";
import reducer from "./reducer";
import { GrAction } from "react-icons/gr";

// Setting Initial State Values 

const AppContext = React.createContext();

const initialState = {
  catagory: specialData,
  index: 0,
  review: reviews[0],
  itemNumber: 1,
  cartItems: JSON.parse(localStorage.getItem('cartList')),
};

// Setting App Provider component to wrap the App Component

const AppProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  
  // Function to chek the index number 

  const checkIndex = (indexNumber) => {
    if (indexNumber > reviews.length - 1) {
      return 0;
    }

    if (indexNumber < 0) {
      return reviews.length - 1;
    }
    return indexNumber;
  };

  //Dispatch of  right Click on the Reveiw section.

  const reviewRightButton = () => {
    dispatch({ type: "REVIEW_RIGHT" });
  };

  const filterItem = (catagory) => {
    dispatch({ type: "FILTER_ITEMS", payroll: catagory });
  };

  useEffect(() => {
    dispatch({ type: "SET_REVIEW" });

    //    state.review = reviews[state.index];
    // // // setReview(reviews[index]);
  }, [state.index]);

  // const autoReview = () => {
  //   dispatch({ type: "AUTO_REVIEW" });
  // };

  // useEffect(() => {
  //   let slider = setInterval(() => {
  //     dispatch({ type: "AUTO_REVIEW" });
  //   }, 3000);
  //   return () => clearInterval(slider);
  // }, [state.index]);

  useEffect(() => {

  },[state.itemNumber]);

  const reviewLeftButton = () => {
    dispatch({ type: "REVIEW_LEFT" });
  };

  const increaseItemNumber = (index) => {


    dispatch({type: 'INCREASE_ITEM' ,payload: index})

  };

  const decreaseItemNumber = (id) => {

    dispatch({ type: 'DECREASE_ITEM',payload : id})

  };
  
  return (
    <AppContext.Provider
      value={{
        ...state,

        checkIndex,
        reviewRightButton,
        reviewLeftButton,
        filterItem,
        increaseItemNumber,
        decreaseItemNumber
        
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

//custom hook

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
