import React, { useContext, useState, useEffect, useReducer } from "react";
import specialData from "./testdata/special";
import reviews from "./testdata/review";
import reducer from "./reducer";
import { GrAction } from "react-icons/gr";

// Setting Initial State Values

const AppContext = React.createContext();





// Setting App Provider component to wrap the App Component

const AppProvider = ({ children }) => {


  const initialState = {
    catagory: specialData,
    index: 0,
    review: reviews[0],
    itemNumber: 1,
    cartItems: JSON.parse(localStorage.getItem("cartList")),
    searchTerm: '',
    totalItem: 0,
    totalPrice: 0,
    featuredItems: [],
    hamburger: false,
    
    
};
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

  //Dispatch the click to remove item funtion to remove sepcific items from the cartItem Array

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
    dispatch({ type: "TOTAL_AMOUNT" })
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

  

  const reviewLeftButton = () => {
    dispatch({ type: "REVIEW_LEFT" });
  };

  const increaseItemNumber = (id) => {
    dispatch({ type: "INCREASE_ITEM", payload: id });
    dispatch({ type: "TOTAL_AMOUNT" })
  };

  const decreaseItemNumber = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
    dispatch({ type: "TOTAL_AMOUNT" })
  };

  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" })
  },[state.totalItem,state.totalPrice])
 


  const addOnCart = (idArg,imgArg,nameArg,priceArg,reviewArg,onSaleArg,salePriceArg) => {
    dispatch({type:"ADD_ITEM",payload:{idArg,imgArg,nameArg,priceArg,reviewArg,onSaleArg,salePriceArg}})
    dispatch({ type: "TOTAL_AMOUNT" })
  }
  
 
 

  const searchItem = (e) => {

    dispatch({ type: 'SET_SEARCH_STR',payload: e})

   

}

const hamburgerBoolean = () => {
  dispatch({type: 'TOGGLE_HAMBURGER'})
}

useEffect(() => {
  dispatch({ type: 'SEARCH_ITEM_ARRAY' })
  
  }, [state.searchTerm])


  useEffect(() => {

    dispatch({type: 'FEATURED_ITEMS'})

  },[])

  const sortItems= (sortArg) => {
  
    dispatch({type:"SORT_ITEMS" , payload: sortArg})

  }


  return (
    <AppContext.Provider
      value={{
        ...state,

        checkIndex,
        reviewRightButton,
        reviewLeftButton,
        filterItem,
        increaseItemNumber,
        decreaseItemNumber,
        removeItem,
        addOnCart,
        searchItem,
        sortItems,
        hamburgerBoolean,
    
        
    
        
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
