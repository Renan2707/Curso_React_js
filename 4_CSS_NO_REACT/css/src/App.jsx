import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
  const n=15

  const redTitle = true

  return (
    <>
      <h1>Css no React</h1>
     <MyComponent/>
     <p>Vazou o css</p>
     {/* Inline Style*/}
     <p style={{color:'yellow', backgroundColor:'blue', borderRight: '5px solid purple'}}>Este elemento tem estilo inline</p>
     {/* Inline Style Dinâmico*/}
     <h2 style={n>10 ? {color:'purple'}:{color:'orange'}}>
      CSS Dinâmico
     </h2>
     <h2 style={n>20 ? {color:'purple'}:{color:'orange'}}>
      CSS Dinâmico
     </h2>
     {/* Classes Dinâmicas*/}
     <h2 className={redTitle ? "red-title" : "title"}>
      Este titulo vai ter uma classe dinâmica
     </h2>
     <Title/>

    </>
  )
}

export default App
