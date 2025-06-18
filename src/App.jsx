import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Layout/Navbar/Navbar.jsx'
import VisualizerPage from './pages/VisualizerPage/VisualizerPage.jsx'
import LandingPage from './pages/LandingPage/LandingPage.jsx'
import OutfitsPage from './pages/OutfitsPage/OutfitsPage.jsx'
import ContactPage from './pages/ContactPage/ContactPage.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/visualizer" element={<VisualizerPage />}/>
        <Route path="/my-outfits" element={<OutfitsPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
      </Routes>
    </BrowserRouter>      
  )
}

export default App