import React from 'react'

function TemplateExpression() {
    const name = "Renan"
    const data={
      age: 21,
      job: "Programador"

    }
  return (
    <div>
        <p>A soma é {2+2}</p>
        <h3>bem-vindo: {name}</h3>
        <p>Sua idade é {data.age} anos, e é um {data.job} em formação</p>
    </div>
  )
}

export default TemplateExpression