import React from 'react'
import "./Components.css"
import { NavLink } from 'react-router-dom'
import Menu from '../../Menu'


const Hanmenu = () => {
  return (
    <>
    <div className='navmenu'>
    <div className='menu'>
    <div className='menu1'>
    <img src='images/ham.png' /></div>
    <NavLink to="/menu" style={{textDecoration:"none", color:"#414a4c",}}><div className='menu2'>MENU</div></NavLink>
    <div className='m3'></div>
    
    
    </div>
    <NavLink to="/" style={{textDecoration:"none", color:"black"}}><div style={{paddingLeft:"10px"}} className="logo"><h1 style={{textShadow: "1px 1px 2px black, 0 0 10px gray, 0 0 1px gray"}} >CREXIN</h1></div></NavLink>
   <NavLink to="/enquiry" style={{textDecoration:"none", color:"#414a4c"}}> <div style={{fontWeight:"light"}} className="enq">ENQUIRY</div></NavLink>
    
    
    
    </div>

    
    </>




  )
}

export default Hanmenu