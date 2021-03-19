
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage, AboutPage, CartPage, CheckoutPage, ProductPage, SingleProductPage } from './pages';


import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import { useEffect } from "react/cjs/react.development";




function App() {

  useEffect(()=> {

    if(JSON.parse(localStorage.getItem('listItem')) === 'null') {
      localStorage.setItem('listItem', [])
    }

  },[]);
  

  

 
  return (
    <Router>
     <Route exact path="/">
        <HomePage />
     </Route>
     <Route exact path="/cart">
       <CartPage />
     </Route>
     
      <Route exact path='/about'>
        <AboutPage />
      </Route>
    </Router>
  );
}

export default App;
