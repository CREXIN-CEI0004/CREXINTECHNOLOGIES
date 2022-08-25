import React from 'react'
import Hanmenu from './src/components/Hanmenu'
import "./src/App.css"
import Footer from './src/components/Footer'
import Hanwhite from './src/components/Hanwhite'
import Footerw from './src/components/Footerw'



const Services = () => {

  const apidata=[{"id":1,"title":"graphic designing","image":"images/8.png",
  "description":"Web development is the work involved in developing a website for the Internet (World Wide Web) or an intranet (a private network. KNOW MORE"}
  ,{"id":2,"title":"website designing","image":"images/9.png",
  "description":"Web design is the planning and creation of websites. This includes a number of separate skills that all fall under the umbrella of web design. "},
  {"id":3,"title":"Website develpoment","image":"images/10.png","description":"Website development can include anything from simply programming the data of a website to adding client liaison, content, network security and web server configuration, e-commerce."},
  {"id":4,"title":"Mobile apps development","image":"images/11.png","description":"Mobile development describes the processes and procedures for writing software for mobile devices, such as smartphones, smartwatches, and tablets."},
  {"id":5,"title":"website maintainence","image":"images/12.png","description":"Website maintenance is the process of updating all moving pieces of your website, along with continually optimizing "},
  ]


  
  return (
    
    <div className='coloredcontainer' style={{backgroundColor:"#414a4c"}}>
    
    <Hanwhite />

      <div className='service'>
      
      <h1 style={{color:"#d9d9d9"}}>our services</h1>
      <div className='servicesdiv'>

      {apidata.map((curElem) => {
        const { id, title, image, description } = curElem;
        return (
          <div>
          
          <div key={id} className="sdiv">
          <div className='sd1'> <img src={image} /></div>
            
            <div className="sd2">
            <h3 style={{color:"#feb859",fontSize:15}}>{title}</h3>
              <p style={{color:"#d9d9d9"}}>{description}</p>
              
            </div>
          </div>
          </div>
        );
      })}


        </div>


        
      
      
      
      </div>
<Footerw />
    
    
    
    </div>
   
  )
}

export default Services