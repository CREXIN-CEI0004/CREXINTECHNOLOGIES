import React from 'react'
import "./Components.css"

const Footery = () => {
  return (
    <div className='footer'>
    <div className='foot1'>
    <div className='mail'><img src='images/2.png' /></div>
    <div style={{color:"#339999"}}>:info@crexin.com</div>
    
    
    
    </div>



    <div className='socialicons'>
    <div><img src='images/4.png'/></div>
    <div className='pipes' style={{backgroundColor:"#dca101"}}></div>
    <div><img src='images/5.png' /></div>
    <div className='pipes' style={{backgroundColor:"#dca101"}}></div>
    <div><img src='images/6.png' /></div>
    </div>




    <div className='call'>
    <div className='call1'><img src='images/3.png' style={{paddingTop:"7px"}}/></div>
    <div className='call2' style={{color:"#339999"}}>:+91-9059891091
    </div>
    
    
    
    </div>
    
    
    
    </div>
  )
}

export default Footery