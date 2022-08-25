import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Components.css"


const Hanyellow = () => {
  return (
    <div>
    <div className='navmenuy' style={{letterSpacing:"3px"}}>
    <div className='menuy'>
    <div className='menu1y'>
    <img src='images/yellow.png' /></div>
    
    <NavLink to="/menu"  style={{textDecoration:"none",color:"#00c2cb"}}>
    <div className='menu2' style={{fontWeight:"bold"}}>MENU</div></NavLink>
    
    <div className='m3'></div>
    
    
    </div>
    <NavLink to="/" style={{textDecoration:"none",color:"#00c2cb"}} ><div><h1>CREXIN</h1></div></NavLink>
    <NavLink to="/enquiry" style={{textDecoration:"none",color:"#00c2cb"}} ><div style={{fontWeight:"bold"}} className="enq">ENQUIRY</div></NavLink>
    
    
    
    </div>

    
    </div>




  )
}

export default Hanyellow