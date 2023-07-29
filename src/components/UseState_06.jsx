import React, { useState } from "react";



import UseState_06a from "./UseState_06a";

export default function () {

    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)

    function dec1()
    {
        setValor1(v1=> v1-5)
    }
    function inc1()
    {
        setValor1(v1=> v1+5)
    }

    function dec2()
    {
        setValor2(v2=> v2-10)
    }
    function inc2()
    {
        setValor2(v2=> v2+10)
    }

    return(
        <>
            <p>Valor1: {valor1}</p>
            <p>Valor2: {valor2}</p>
            <UseState_06a inc={inc1} dec={dec1}/>
            <hr />
            <UseState_06a inc={inc2} dec={dec2}/>
            <hr />
            <p>A soma de {valor1} com {valor2} vale: {valor1 + valor2}</p>
        </>
    )
}