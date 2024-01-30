import React from 'react'
import { useState } from 'react'




function Data() {
    let someData =10;

    const[anotherNumber, setAnotherNumber] = useState(15);
    const[outroNumero, setOutroNumero] = useState(45);

  return (
    <div>
        <div>
            <p>Valor:{someData}</p>
            <button onClick={() => (someData = 15)}>Mudar Variável</button>
        </div>

        <div>
            <p>Valor:{anotherNumber}</p>
            <button onClick={() => setAnotherNumber(20)}>Mudar Variável State</button>
        </div>

        <div>
            <p>Valor:{outroNumero}</p>
            <button onClick={() => setOutroNumero(12)}>Mudar Variável State2</button>
        </div>

    </div>

  )
}

export default Data