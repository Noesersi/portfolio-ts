import React from 'react'
import Navbar from './Navbar/navbar'
import Home from './home/home'
import Footer from './footer/footer'
import './App.css'
import StickyBar from './components/StickyBar/StickyBar'

const App: React.FC = () => {
  return (
    <>
      <StickyBar />
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
