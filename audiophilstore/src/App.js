
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { HomePage, AboutPage, CartPage, CheckoutPage, ProductPage, SingleProductPage } from './pages';


import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";



function App() {
 
  return (
    <Router>
     <Route exact path="/">
        <HomePage />
     </Route>
     
      <Route exact path='/about'>
        <AboutPage />
      </Route>
    </Router>
  );
}

export default App;
