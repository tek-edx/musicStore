import React from 'react'
import HeaderBadge from './components/HeaderBadge';
import specialData from './testdata/special';
import Product from'./components/Product';
import HighlightItem from './components/HighlightItem';
import Footer from './components/Footer';
import './css/special.css'

function App() {
  
  return (
    
    <>
    <HeaderBadge />
      <HighlightItem items={specialData} />
      
      <div className="special-item-grid">
    {

      specialData.map((specialItem) => {
        const {id} = specialItem
        return <Product key={id} items={specialItem} />
       
      })
    }
    </div>
   
   <Footer />
    </>
    
  );
}

export default App;
