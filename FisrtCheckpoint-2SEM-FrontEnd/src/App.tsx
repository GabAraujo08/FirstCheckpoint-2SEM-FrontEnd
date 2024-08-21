import { useState } from 'react'
import Header from './Components/Header'
import './App.css'
import Enredo from './Components/Enredo'
import Banner from './Components/Banner'
import Avaliacoes from './Components/Avaliacoes'

function App() {
  

  return (
    <>
    
      <Header />
    <main>
      <Banner/>
      <Enredo/>
      <Avaliacoes/>
    </main>
    </>
    

  )
}

export default App
