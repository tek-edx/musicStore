import React, { useContext, useState, useEffect, useReducer } from "react";
import specialData from "./testdata/special";
import reviews from "./testdata/review";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  catagory: specialData,
  index: 0,
  review: reviews[0],
};

const AppProvider = ({ children }) => {
  //   const [catagory, setCatagory] = useState(specialData);
  //   const [index, setIndex] = useState(0);
  //   const [review, setReview] = useState(reviews[index]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const checkIndex = (indexNumber) => {
    if (indexNumber > reviews.length - 1) {
      return 0;
    }

    if (indexNumber < 0) {
      return reviews.length - 1;
    }
    return indexNumber;
  };

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

  useEffect(() => {
    let slider = setInterval(() => {
      dispatch({ type: "AUTO_REVIEW" });
    }, 3000);
    return () => clearInterval(slider);
  }, [state.index]);

  const reviewLeftButton = () => {
    dispatch({ type: "REVIEW_LEFT" });
  };
  return (
    <AppContext.Provider
      value={{
        ...state,

        checkIndex,
        reviewRightButton,
        reviewLeftButton,
        filterItem,
        
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
