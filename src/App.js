import './App.css';
import React from 'react';
import Home from './components/Home';
import Menu from './components/Menu';
import Story from './components/Story';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Home/>
    <Routes>
          <Route exact path="/menu" element={<Menu />} />
          <Route exact path="/story" element={<Story />} />
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer/>
        </Router>
    </>
  );
}

export default App;
