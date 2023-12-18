import React from 'react'
import Navbar from './Navbar/navbar'
import Home from './home/home'
import Footer from './footer/footer'
import './App.css'

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  )
}

export default App
