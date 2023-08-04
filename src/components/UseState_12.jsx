import React, {useState} from "react";


import CompA from './UseState_12a'
import CompB from './UseState_12b'

export default function () {

    const [chave, setChave] = useState(true)

    return(
        <>
            <h3>Conditional Rendering: <span style={{color:'yellow'}}>Alternate between components</span></h3>
            <hr />

           <button onClick={()=> setChave(!chave)}>
                Alternate
           </button>


            {chave ? <CompA/> : <CompB />}


            <div className="exerc">
                <hr />
                <h3>Exercício:</h3>
                <p>1 - Criar um componente que vai apresentar condicionalmente um componente A ou B no seu interior.</p>
                <p>2 - A apresentação do componente A ou B deve ser controlada pelo click de um botão. </p>
                <hr />
            </div>

        </>
    )
}