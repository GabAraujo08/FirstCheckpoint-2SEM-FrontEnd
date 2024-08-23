import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Enredo from './Components/Enredo'
import Banner from './Components/Banner'
import Avaliacoes from './Components/Avaliacoes'
import Footer from './Components/Footer'
import MediaQuerie from './Components/MediaQuerie'

function App() {
  

  return (
    <>
      <MediaQuerie/>
      <Header />
    <main>
      <Banner/>
      <Enredo/>
      <Avaliacoes/>
      <Footer/>
    </main>
    </>
    

  )
}

export default App
