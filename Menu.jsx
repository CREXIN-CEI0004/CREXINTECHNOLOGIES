import React from 'react'
import "./src/App.css"
import Footer from './src/components/Footer'
import Navoptions from './src/components/Navoptions'
import { NavLink } from 'react-router-dom'









const Menu = () => {
  return (
    <div className='menupage' >




    <div className='navtop'>


    <NavLink to="/"><div className='cancelmark' ><img src='images/cancel.png'  /></div></NavLink>
    <NavLink to="/" style={{textDecoration:"none",color:"#414a4c" ,fontWeight:"bolder"}}><div style={{paddingLeft:"10px"}}><h1>crexin</h1></div></NavLink>
    <NavLink to="/enquiry" style={{textDecoration:"none",color:"#414a4c"}}><div style={{fontWeight:"bold",}} className="enqmenu">enquiry</div></NavLink>
    
    
    
    </div>

    




    <div className='options' style={{fontWeight:"bold"}}>
    <NavLink to="/services" style={{textDecoration:"none", color:"white"}}><div className='bottom' style={{paddingTop:"170%",borderLeft:"none"}}>services</div></NavLink>
      <div className='linesblue' style={{height:"70vh",width:"2px",backgroundColor:"#339999"}}></div>
    
    <NavLink to="/portfolio" style={{textDecoration:"none", color:"white"}}><div className='top'style={{paddingTop:"55%"}} >portfolio</div></NavLink>
    <div  className='linesblue' style={{height:"70vh",width:"2px",backgroundColor:"#339999"}}></div>
    <NavLink to="/about" style={{textDecoration:"none", color:"white"}} ><div className='bottom'style={{paddingTop:"195%"}}>about</div></NavLink>
    <div  className='linesblue' style={{height:"70vh",width:"2px",backgroundColor:"#339999"}}></div>
    <NavLink to="/contact"  style={{textDecoration:"none", color:"white"}}><div className='top' style={{paddingTop:"45%"}}>contact</div></NavLink>
   
    
       

    
    
    </div>




    <Footer />

    </div>
  )
}

export default Menu