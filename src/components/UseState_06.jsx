import React, { useState } from "react";



import UseState_06a from "./UseState_06a";

export default function () {

    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)

    function dec1() {
        setValor1(v1 => v1 - 5)
    }
    function inc1() {
        setValor1(v1 => v1 + 5)
    }

    function dec2() {
        setValor2(v2 => v2 - 10)
    }
    function inc2() {
        setValor2(v2 => v2 + 10)
    }

    return (
        <>
            <p>Valor1: <strong>{valor1}</strong></p>
            <p>Valor2: <strong>{valor2}</strong></p>
            <UseState_06a inc={inc1} dec={dec1} />
            <hr />
            <UseState_06a inc={inc2} dec={dec2} />
            <hr />
            <h3>A soma de {valor1} com {valor2} vale: {valor1 + valor2}</h3>
            <hr />

            <div className="exerc">
                <hr />
                <h3>Exercício:</h3>
                <p> - Um componente pai vai receber atualização de valores de dois componentes filhos.</p>
                <p>- Esses componentes filhos são instâncias do mesmo componente contador (inc e dec)</p>
                <p>- Um dos componentes incrementa e decrementa de 5 em 5 e o outro de 10 em 10. </p>
                <p>
                    - No componente pai, vai ser apresentado o resultado da adição dos valores controlados pelos dois componentes filhos.
                </p>
                <hr />
            </div>


        </>
    )

}