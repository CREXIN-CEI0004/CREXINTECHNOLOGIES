import React from 'react'
import { NavLink } from 'react-router-dom'
import "./src/App.css"

const Enquiry = () => {
  return (
    <div className='enquiry'>
    <NavLink to="/"><div className='cross' style={{padding:"2%"}}><img src='images/crossy.png' /></div></NavLink>

<h1>Send your enquiry</h1>

    <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/mwkzkkev"
            method="POST"
            className="contact-inputs">
            
            <label class="custom-field two" >
            <input type="text" name='username' placeholder="&nbsp;" autoComplete='off' required/>
            <span class="placeholder">name</span>
          </label>

          <label class="custom-field two">
            <input type="tel" name='mobile' placeholder="&nbsp;" autoComplete='off' required/>
            <span class="placeholder">mobile</span>
          </label>

            

            
            <label class="custom-field two">
  <input type="text" name='email' placeholder="&nbsp;" autoComplete='off' required/>
  <span class="placeholder">email</span>
</label>

<label class="custom-field two" >
<textarea type="text" name='message' style={{background:"transparent", border:"none",borderBottom:"2px solid #dca101",width:"410px"}} cols="30" rows="6" placeholder="&nbsp;" autoComplete='off' required> </textarea>
<span class="placeholder">description</span>
</label>




           

            <input className='submitbut' type="submit" value="submit"  />
          </form>
        </div>
      </div>


     


    
    
    
    
    
    
    </div>
  )
}

export default Enquiry