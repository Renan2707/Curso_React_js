import { useState } from 'react'
import './App.css'
//Importando componentes
import FirstComponent from './components/FirstComponents'
import TemplateExpression from './components/TemplateExpression'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

function App() {
  //comentario
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Fundamentos do React</h1>
      <FirstComponent/>
      {/* 3-Comentario no JSX */}
      <TemplateExpression/>
      <MyComponent/>
      <Events/>
    </>
  )
}

export default App
