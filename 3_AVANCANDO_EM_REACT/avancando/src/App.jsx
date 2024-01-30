import { useState } from 'react'
import './App.css'
//Imagem em Assets
import home from './assets/home_atual.png'

import Data from './components/Data'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import ShowUserName from './components/ShowUserName'
import CarDetails from './components/CarDetails'
import Container from './components/Container'
import FunctionProp from './components/FunctionProp'
import Message from './components/Message'
import ChangeMessage from './components/ChangeMessage'

//Renderização de listas com componentes
const cars=[
  {id:1, brand: "Honda", color:"Preto", km:0},
  {id:2, brand: "KIA", color:"Azul", km:12.653},
  {id:3, brand: "Renault", color:"Prata", km:49.861},
]

function showMessage(){
  console.log("Funçaõ do componente pai")
}




function App() {
  const [message,setMessage] = useState("")
  const handleMessage = (msg) =>{
    setMessage(msg)
  } 

  return (
    <>
    <div style={{ paddingBottom: "500px"}}>
      <h1>Avançando em React</h1>

      {/*1- Imagem em public */}
      <img src="/new_home_1.png" alt="alguma imagem" />

      {/*2- Imagem em assets */}
      <img src={home} alt="outra imagem" />

      {/*Hooks*/}
      <Data/>

      {/* Renderização de Lista */}
      <ListRender/>

      {/* Renderização Condicional */}
      <ConditionalRender/>

      {/* Props */}
      <ShowUserName name="Renan"/>

      {/* Desestruturando Props */}
      <CarDetails brand="VW" km={127.892} color="Vermelho"/>  

      {/* Reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={236.987} color="Branco"/>  
      <CarDetails brand="Chevrolet" km={89.654} color="Prata"/>  

      {/*Renderização de listas com componentes*/}
      {cars.map((car)=>(
        <CarDetails key={car.id} brand={car.brand} km={car.km} color={car.color}/>
      ))}

      {/*Trazendo conteudo "html" do pai*/}
      <Container>
        <p>Alguma coisa</p>
      </Container>

      {/*Função em props*/}
      <FunctionProp myFunction={showMessage}/>


      {/*state lift*/}
      <Message msg={message}/>
      <ChangeMessage handleMassage={handleMessage}/>



    </div>
      

    </>
  )
}

export default App
