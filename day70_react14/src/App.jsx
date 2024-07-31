import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Product from './Pages/Product';
import About from './Pages/About';
import Career from './Pages/Career';
import Contact from './Pages/Contact';
import Teams from './Pages/Teams';
import Navbar from './Components/Navbar';
import Product_Detail from './Pages/Product_Detail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/product/:id" element={<Product_Detail/>} />
      </Routes>
    </Router>
  )
};

export default App