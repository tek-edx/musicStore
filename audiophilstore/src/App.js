import React,{useState,useEffect} from 'react'
import HeaderBadge from './components/HeaderBadge';

import Product from'./components/Product';
import HighlightItem from './components/HighlightItem';
import SearchAndSignup from './components/SearchAndSignup'
import Categories from './components/Categories';

import Review from './components/Review'

import FAQ from './components/FAQ';
import Footer from './components/Footer';



import specialData from './testdata/special';
import faqs from './testdata/faq';
import reviews from './testdata/review';
import './css/special.css'
import { BsReverseLayoutTextWindowReverse } from 'react-icons/bs';


let itemCategory = ['All',...new Set(specialData.map((item) => item.catagory))];

function App() {

  const [catagory,setCatagory] = useState(specialData);

  const [index, setIndex] = useState(0);
  const [review,setReview] = useState(reviews[index]);

  const checkIndex = (indexNumber) =>{

    if(indexNumber > reviews.length - 1 ){
      return 0
    }

    if (indexNumber < 0) {
      return reviews.length - 1;
    }
    return indexNumber;

  }
  // console.log(index);
 
  // const reviewLeftButton = () => {
    
  //   setIndex((index) => {
      
  //     if(index > 0){
  //       let newIndex = index--;
        
  //       return newIndex;
  //     } else {
  //       let newIndex = reviews.lenght - 1;
  //       return newIndex;
  //     }
  //   });
    
  //  console.log(index);

   
  // }
     
    
  useEffect(() => {
    setReview(reviews[index]);
  })


  const reviewLeftButton = () => {


    setIndex((index) => {

      index = index - 1;;
      let newIndex = checkIndex(index);
      return newIndex;
    })


  };



  const reviewRightButton = () => {
    

    setIndex((index) => {
      
    index = index + 1;
    let newIndex = checkIndex(index);
    return newIndex;
    })
    
    
  };
 
  const filterItem = (catagory) => {
    console.log(catagory)
    if (catagory === 'All'){
      setCatagory(specialData);
      return ;
      
    }

    let newCatagoryItems = specialData.filter((item) => item.catagory === catagory);
    console.log(newCatagoryItems)
    setCatagory(newCatagoryItems);
  }
  
  
  return (
    
    <>
    <HeaderBadge />
      
      <HighlightItem items={specialData} />
      <SearchAndSignup />

      <Categories  itemCategories={itemCategory} filterItem={filterItem}/>
      
      <div className="special-item-grid">
    {

      catagory.map((specialItem) => {
        const {id} = specialItem
        return <Product key={id} items={specialItem} />
       
      })
    }
    </div>

    <Review review={review} rightClick={reviewRightButton} leftClick={reviewLeftButton} />

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
