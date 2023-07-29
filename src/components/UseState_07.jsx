import React from "react";
import { useState } from 'react'
import UseState07a from "./UseState_07a";

export default function () {

    const [values, setValues] = useState([0, 0, 0])

    function update(i, unity)  //i - index, unity (+1 or -1)
    {
        const tmp = [...values]
        tmp[i] = tmp[i] + unity
        setValues(tmp)
    }

    return (
        <>
            <h3>Valores: <strong>[{values[0]}, {values[1]}, {values[2]}]</strong></h3>
            <hr />
            - Elemento 1 <UseState07a dec={() => update(0, -1)} inc={() => update(0, 1)} />
            - Elemento 2 <UseState07a dec={() => update(1, -1)} inc={() => update(1, 1)} />
            - Elemento 3 <UseState07a dec={() => update(2, -1)} inc={() => update(2, 1)} />

        
            <div className="exerc">
                <hr />
                <h3>Exercício:</h3>
                <p>1 - Um componente pai tem 3 instancias de inc e dec ( mesmo componente)</p>
                <p>2 - O componente pai tem um state que é um Array de valores numéricos</p>
                <p>3 - Cada instância vai controlar um valor desse array</p>
                <p>4 - Os três valores do array devem ser apresentados no componente pai.</p>
                <hr />
            </div>
        </>
    )
}

