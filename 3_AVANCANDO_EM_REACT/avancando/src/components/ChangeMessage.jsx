import React from 'react'

function ChangeMessage({handleMassage}) {

    const messages = ["oi", "olá", "tudo bem?"]
  return (
    <div>
        <button onClick={() => handleMassage(messages[0])}>Botão 1</button>
        <button onClick={() => handleMassage(messages[1])}>Botão 2</button>
        <button onClick={() => handleMassage(messages[2])}>Botão 3</button>
    </div>
  )
}

export default ChangeMessage