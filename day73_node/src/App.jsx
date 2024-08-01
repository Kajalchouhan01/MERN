import { useState } from 'react'
import logo from './assets/logo.jpg'
import './App.css'
import Navbar from './component/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You may also need to import the CSS file

AOS.init();
function App() {


  return (

    <>

<div data-aos="animation_name">

</div>
   <div className="container ">
    <Navbar></Navbar>
   </div>
    
    </>
  )
}

export default App