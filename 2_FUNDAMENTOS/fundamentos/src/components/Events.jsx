import React from 'react'

function Events() {

    const handleClick = () => {
        console.log("Executando função");
    };

    //Função de Renderização
    const renderSomething = (x) =>{
        if (x) {
            return <h1>Caiu no IF!</h1>
        }
        else{
            return <h1>Caiu no Else!</h1>
        }
    };



  return (
    <div>
        {/* evento */}
        <div>
            <button onClick={()=> console.log("Testando um evento")}>Clique Aqui</button>
        </div>
        {/* evento com funçaõ*/}
        <div>
            <button onClick={handleClick}>Clique Com Função</button>
        </div>
        {/*função com render*/}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events