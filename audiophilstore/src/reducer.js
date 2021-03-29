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
    searchTerm,
    featuredItems,
    hamburger,
  
    
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
      { itemAmount: 0, itemTotal: 0,itemPriceTotal: 0 }
    );

    
    
    

    return { ...state, totalItem: total.itemAmount,totalPrice: total.itemTotal,itemPriceTotal: total.itemPriceTotal };
  }



  if(action.type === 'ADD_ITEM'){

    const {idArg,imgArg,nameArg,priceArg,reviewArg,onSaleArg,salePriceArg} = action.payload


    const result = Array.from(
      new Set(
        cartItems.map((item) => {
          return item.id;
        })
      )
    );

    if (result.includes(idArg)) {
      cartItems.map((item, index) => {
        if (item.id === idArg) {
          let newAmount = cartItems[index].amount;
          cartItems[index].amount = newAmount + 1;
          console.log(cartItems[index].amount);
        }
      });


      

      //   existingItem['amount'] = amount + 1;

      localStorage.setItem("cartList", JSON.stringify(cartItems));
    } else {
      cartItems.push({
        id: idArg,
        image: imgArg,
        name: nameArg,
        price: priceArg,
        review: reviewArg,
        onSale: onSaleArg,
        salePrice: salePriceArg,
        amount: 1,
      });
      localStorage.setItem("cartList", JSON.stringify(cartItems));
    }
    return state
    
  }

  


  if (action.type === "SET_SEARCH_STR") {

   console.log(searchTerm)
    let searchString = action.payload.target.value;
    console.log(searchString);

    return {...state, searchTerm: searchString}
  }

    if(action.type === 'SEARCH_ITEM_ARRAY'){

      let newItem = specialData.filter((item) => {
       if(item.name.includes(searchTerm)) {
    
         return item

        }
        if (searchTerm === ''){
          return specialData
        }

      })

     console.log(newItem)
      
      return { ...state, catagory: newItem}

    };

  if (action.type === 'FEATURED_ITEMS') {
    console.log(` I am inside featured item`)
    


    let featuredItem = specialData.filter((item) => {

      console.log(item.featuredItem)
      if(item.featuredItem === true){
        return item
      }

    })

    console.log(featuredItem);

    return { ...state, featuredItems: featuredItem}

  };


  if(action.type === 'SORT_ITEMS'){


    let sortedItems = [];
    console.log(action.payload);

    if(action.payload === 'high-first'){

     sortedItems = specialData.sort((a,b) => {

      return (b.price - a.price)

     });
    
     return {...state, catagory: sortedItems}

    }
    if (action.payload === 'low-first') {

      sortedItems = specialData.sort((a, b) => {

          

          return (a.price - b.price)

        });
        

        return { ...state, cartagory: sortedItems }
    }

    
    if (action.payload ==='rating') {
      
      console.log('Rating','I am inside')
      sortedItems = specialData.sort((a,b) => {


         return (b.review - a.review)
      })
      console.log(sortedItems)

      return {...state, catagory: sortedItems}

    }
    if (action.payload === 'new-Item') {

      
    
    }
    if (action.payload === 'special') {

      let sortedItems = specialData.filter((item) => item.onSale)

    
    return  {...state, catagory: sortedItems }
  }
}

if(action.type==='TOGGLE_HAMBURGER'){

  let newHamburger = !hamburger;

  return {...state, hamburger: newHamburger}
}

    return state
    
}




 



export default reducer;
