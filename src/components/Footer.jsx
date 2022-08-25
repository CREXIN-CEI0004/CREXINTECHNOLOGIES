import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Components.css"

const Footer = () => {
  return (
    <div className='footer'>
    <div className='foot1'>
    <div className='mail'><img src='images/2.png' /></div>
    <div>:info@crexin.com</div>
    
    
    
    </div>



    <div className='socialicons'>
    <a href="https://www.linkedin.com/company/crexin-technologies/" ><div><img src='images/4.png'/></div></a>
    <div className='pipes'></div>
    <a href='https://www.facebook.com/Crexin-Technologies-108929211874193' ><div><img src='images/5.png' /></div></a>
    <div className='pipes'></div>
    <a href='https://www.instagram.com/crexintech/'><div><img src='images/6.png' /></div></a>
    </div>




    <div className='call'>
    <div className='call1'><img src='images/3.png' style={{paddingTop:"6px"}}/></div>
    <div className='call2'>:+91-9059891091
    </div>
    
    
    
    </div>
    
    
    
    </div>
  )
}

export default Footer