import { useState,useEffect } from 'react'
import './App.css'
const url = "http://localhost:3000/products"
function App() {
  const [products, setProducts] =useState([])

  useEffect(()=> {
    async function getData(){
      const res = await fetch(url)
      const data = await res.json()

      setProducts(data)
    }
    
    getData()

  }, [])

  return (
    <>
    <h1>HTTP em react</h1>
    <ul>
      {products.map((product)=> (
        <li key={product.id}>{product.name} - R${product.price}</li>
      ))}
    </ul>
      
    </>
  )
}

export default App
