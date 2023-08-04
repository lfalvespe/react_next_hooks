import React, {useState} from "react"

import '../UseState_10.css'


export default function () {

    const [tab, setTab] = useState(0)

    return(
        <>
            <h3>Condicional Rendering: Visible Tab</h3>

            <p>
                Número de Títulos: 
                {tab === 1 && <span> Tri Campeã</span>}
                {tab === 2 && <span> Penta Campeã</span>}
                {tab === 3 && <span> Tetra</span>}
                {tab === 4 && <span> Nenhum título</span>}
            </p>
            

            <select onChange={(e)=> setTab(parseInt(e.target.value))}>
                <option value="0">Select country</option>
                <option value="1">Argentina</option>
                <option value="2">Brasil</option>
                <option value="3">Deutschland</option>
                <option value="4">Netherlands?</option>
            </select>
            
            <div className="exerc">
                <hr />
                <h3>Exercício:</h3>
                <p>1 - Selecionar uma opção num select (com 3 opções)</p>
                <p>2 - Apresentar o componente correspondente</p>
                <hr />
            </div>
        </>
    )
}

