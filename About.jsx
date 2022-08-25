import React from 'react'
import "./src/App.css"
import Footer from './src/components/Footer'
import Footery from './src/components/Footery'
import Hanmenu from './src/components/Hanmenu'
import Hanyellow from './src/components/Hanyellow'

export const About = () => {
  return (
    <div className='about'>
    
    <Hanyellow />


    <div className='abt'>
    <h1>
    About us
    
    </h1>
    <p>rexin provides customers an easier and flexible platform for renting equipments anytime anywhere. We provide round the clock support for any rental needs for our customers. Crexin rentals is a platform where customers can find wide variety of construction equipments to rent conveniently at affordable rates. Once a rental request is made, We make sure to find the right equipment which matches the specification and deliver it at right time to right place. We provide the best customer support until the job is done.</p>
    
    
    
    </div>


    <div className='abtus'>
    <div className='abtus1'>
    <h4 className='abth41'>Deploy</h4>
    <h4 className='abth42'>Test</h4>
    
    
    </div>

    <div  className='abtus2'>
    <h4 className='abth'>Plan</h4>
    <h4 className='aabth2'>Develop</h4>
    
    </div>


    <div  className='abtus1'>
    <h4 className='abth41'>Define</h4>
    <h4 className='abth42'>Design</h4>
    
    
    </div>
    
    
    
    </div>

    <Footery />
    
    
    
    </div>
  )
}
