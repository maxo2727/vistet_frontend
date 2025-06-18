import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import VisualizerPage from './pages/VisualizerPage/VisualizerPage.jsx'
import LandingPage from './pages/Landing/LandingPage.jsx'
import Navbar from './components/Layout/Navbar/Navbar.jsx'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/visualizer" element={<VisualizerPage />}/>
        <Route path="/my-outfits" element={<LandingPage />}/>
      </Routes>
    </BrowserRouter>      
  )
}

export default App