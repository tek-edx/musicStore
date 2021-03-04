import React from 'react'
import HeaderBadge from './components/HeaderBadge';

import Product from'./components/Product';
import HighlightItem from './components/HighlightItem';

import FAQ from './components/FAQ';
import Footer from './components/Footer';


import specialData from './testdata/special';
import faqs from './testdata/faq'
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

    <h3>FAQ</h3>
   {
     faqs.map((faq) =>{
       return <FAQ key={ faq.id} {...faq} />
     })
    
}
   <Footer />
    </>
    
  );
}

export default App;
