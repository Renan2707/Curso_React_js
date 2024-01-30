import React from 'react'

function FunctionProp({myFunction}) {
  return (
    <div>
        <button onClick={myFunction}>Clique para executar a função</button>
    </div>
  )
}

export default FunctionProp