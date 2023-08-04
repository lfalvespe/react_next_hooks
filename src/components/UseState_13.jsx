import React, {useState} from "react";


export default function () {

    const [texto, setTexto] = useState('Digite algo')

    return(
        <>
            <h3>
                Obtendo dados de um input e apresentando no browser: 
                <span style={{color:"yellow"}}>{texto}</span>
                </h3>
            <hr />

            <input type="text" onChange={(e)=> setTexto(e.target.value)} value={texto}/>


        </>
    )
}