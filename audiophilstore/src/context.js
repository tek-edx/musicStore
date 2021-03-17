import React, { useContext, useState, useEffect } from "react";
import specialData from "./testdata/special";
import reviews from "./testdata/review";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
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

  useEffect(() => {
    setReview(reviews[index]);
  }, [index]);

  useEffect(() => {
    let slider = setInterval(() => {
      let newIndex = checkIndex(index + 1);
      setIndex(newIndex);
      setReview(reviews[index]);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  const reviewLeftButton = () => {
    setIndex((index) => {
      index = index - 1;
      let newIndex = checkIndex(index);
      return newIndex;
    });
  };
  return (
    <AppContext.Provider
      value={{
        catagory,
        index,
        review,
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
