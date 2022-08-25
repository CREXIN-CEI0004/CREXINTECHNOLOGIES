import React from 'react'
import "./Components.css"
import { NavLink } from 'react-router-dom'
import Menu from '../../Menu'


const Hanwhite = () => {
  return (
    <>
    <div className='navmenu'>
    <div className='menu'>
    <div className='menu1'>
    <img src='images/17.png' /></div> 
    <NavLink to="/menu" style={{textDecoration:"none", color:"white"}}><div className='menu2' >MENU</div></NavLink>
    <div className='m3'></div>
    
    
    </div>
    <NavLink to="/" style={{textDecoration:"none", color:"#414a4c"}}><div style={{paddingLeft:"20px",color:"white"}}><h1>CREXIN</h1></div></NavLink>
   <NavLink to="/enquiry" style={{textDecoration:"none", color:"white"}}> <div style={{fontWeight:"bold"}} className="enq">ENQUIRY</div></NavLink>
    
    
    
    </div>

    
    </>




  )
}

export default Hanwhite