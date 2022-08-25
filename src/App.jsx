
import { BrowserRouter, Route, Routes,NavLink } from 'react-router-dom'
import Home from '../Home'

import { About } from '../About'
import Portfolio  from '../Portfolio'
import Services from '../Services'
import Contact from '../Contact'
import "./App.css"
import Error from '../Error'
import Menu from '../Menu'
import Enquiry from '../Enquiry'
import Webdevelopmentanddesigning from '../Webdevelopmentanddesigning'
import Websitemaintaience from '../Websitemaintaience'
import Mobiledevelopment from '../Mobiledevelopment'
import Graphicdesigning from '../Graphicdesigning'


function App() {
  

  return (
    


    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home />}/>
    <Route path='/menu' element={<Menu />} />
    <Route path='/services' element={<Services />} />

    <Route  path='/about' element={<About />}/>
    <Route path='/portfolio' element={<Portfolio />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/enquiry' element={<Enquiry />} />
    <Route path='/webdevelopmentanddesigning' element={<Webdevelopmentanddesigning />} />
    <Route path='/websitemaintainence' element={<Websitemaintaience />} />
    <Route path='/mobiledevelopment' element={<Mobiledevelopment />} />
    <Route path='/graphicdesigning' element={<Graphicdesigning />} />
    <Route  path='*' element={<Error />}/>
    
    
    </Routes>
    
    
    
    
    
    </BrowserRouter>
   
    
    
  )
}

export default App
