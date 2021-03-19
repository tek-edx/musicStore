import specialData from "./testdata/special";
import reviews from "./testdata/review";

function reducer(state, action) {
  const {
    catagory,
    index,
    review,
    itemNumber,
    cartItems,
    totalItem,
    totalPrice,
  } = state;

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
    cartItems.map((cartItem) => {
      if (cartItem.id === action.payload) {
        let newAmount = cartItem.amount++;

        return { ...cartItem, amount: newAmount };
      }

      return { ...cartItem };
    });

    localStorage.setItem("cartList", JSON.stringify(cartItems));

    return { ...state, cartItems: cartItems };
  }

  if (action.type === "DECREASE_ITEM") {
    cartItems.map((cartItem) => {
      if (cartItem.id === action.payload) {
        let newAmount = cartItem.amount--;

        return { ...cartItem, amount: newAmount };
      }

      return { ...cartItem };
    });

    localStorage.setItem("cartList", JSON.stringify(cartItems));

    return { ...state, cartItems: cartItems};
  }

  if (action.type === "REMOVE_ITEM") {
    let newCartItem = cartItems.filter((cartItem) => {
      return cartItem.id !== action.payload;
    });

    console.log(newCartItem);
    console.log(action.payload);
    localStorage.setItem("cartList", JSON.stringify(newCartItem));

    return { ...state, cartItems: newCartItem };
  }

  if (action.type === "TOTAL_AMOUNT") {
    console.log("Total Amount activated");

    let total = cartItems.reduce(
      (total, item) => {
        const { amount, price } = item;

        console.log(total);

        total.itemTotal += parseFloat(amount * price);
        total.itemAmount += amount;

        return total;
      },
      { itemAmount: 0, itemTotal: 0 }
    );

    
    
    

    return { ...state, totalItem: total.itemAmount,totalPrice: total.itemTotal };
  }
}

export default reducer;
