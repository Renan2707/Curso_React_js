import React from 'react'

function Container({children}) {
  return (
    <div>
        <h1>Conteúdo do componente pai:</h1>
        {children}
    </div>
  )
}

export default Container