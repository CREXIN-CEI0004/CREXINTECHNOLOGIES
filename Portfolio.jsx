import React from 'react'
import "./src/App.css"
import Footer from './src/components/Footer'
import Hanmenu from './src/components/Hanmenu'

const Portfolio = () => {

  const data = [{
   "id":1,
   "title":"Example 1",
   "image":"images/portfolio.png"

  },
  {
    "id":2,
    "title":"Example 1",
    "image":"images/portfolio.png"
 
   },
   {
    "id":3,
    "title":"Example 1",
    "image":"images/portfolio.png"
 
   },
   {
    "id":4,
    "title":"Example 1",
    "image":"images/portfolio.png"
 
   },




]



  return (
    <div className='portcont' >
    <Hanmenu />
    <div className='port'>
    
    <h1 style={{fontSize:20,}}>Our Portfolio</h1>



    <div className='portdivs'>
    
    {data.map((curElem) => {
      const { id, title, image,  } = curElem;
      return (
        
       
        <div key={id} className="exm" >
        <div> <img src={image} /></div>
        <h3 style={{fontSize:"15px"}}>{title}</h3>
          
        </div>
        
      );
    })}
    
    </div>
    
    
    
    </div>
    
    <Footer />
    
    </div>
  )
}

export default Portfolio