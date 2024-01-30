import React from 'react'

function ConditionalRender() {
    const x=5;
    const name="Renan";
  return (
    <div>
        {/* Renderização condiconal */}
        <h3>isso será exibido?</h3>
        {x>2 && <p>Se x for true, sim!</p>}
        {/* Else */}
        {name === "José" ?(
          <div>
            <p>Olá José!</p>
          </div>
        ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
        )}

    </div>
  )
}

export default ConditionalRender