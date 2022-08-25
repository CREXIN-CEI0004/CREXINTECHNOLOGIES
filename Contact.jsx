import React from 'react'
import Hanyellow from './src/components/Hanyellow'
import "./src/App.css"
import { NavLink } from 'react-router-dom'



const Contact = () => {
  return (
    <div  className="enqbox">
    <Hanyellow />
    

    <div className='contact'>
    <div className='continfo'>

    <h1>CONTACT</h1>
    

    <h3 style={{paddingTop:"10%"}}>WRITE TO US</h3>
    <p>info@crexin.com</p>
   

    <h3 className='soco'  >call us</h3>
    <p>+91-9059891091</p>
    
    
    
    
    
    </div>




    <div style={{width:"50%"}} className="mapdiv">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3628406248254!2d78.38126211511396!3d17.442339188045636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb932a49b02403%3A0x6fd3cffbca4f12da!2sCREXIN%20Technologies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1660037816884!5m2!1sen!2sin"
        width="100%"
        height="100%"
        allowtransparency = "true"
        style={{ border: 0 }}
        allowFullScreen="yess"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    
    </div>
    <div className='continfo2'>

   
    

    <h3 className='whrs' >Working hours</h3>
    <p>MON-FRI: 10AM TO 7PM</p>
   

    <h3  className='soco' >social</h3>
    <div className='csocialicons' style={{backgoundColor:"black",height:"30px",width:"100px",}}>
    <div><a href='https://www.linkedin.com/company/crexin-technologies/'><img src='images/4.png'/></a></div>
    <div className='lines' style={{height:"40px",width:"2px",backgoudColor:"black",marginLeft:"10px"}}></div>
    <div><a href='https://www.facebook.com/Crexin-Technologies-108929211874193'><img src='images/5.png' /></a></div>
    <div className='lines' style={{height:"40px",width:"2px",backgoudColor:"black",marginLeft:"10px"}}></div>
    <div><a href='https://www.instagram.com/crexintech/'><img src='images/6.png' /></a></div>
    </div>
    
    
    
    
    
    </div>
    
    
    
    </div>
    <p className='rights' style={{color:"#be8f0e",fontFamily:"lastica",textAlign:"center",fontWeight:"bold",marginTop:"2%",fontSize:"10px",letterSpacing:"3px"}}>all rights reserved@2022</p>
    
    </div>
  )
}

export default Contact