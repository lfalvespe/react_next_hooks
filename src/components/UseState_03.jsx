import { useState } from "react";

export default function () {

    const [valor1, setValor1] = useState(0)
    const [valor2, setValor2] = useState(0)

    function aumentar1()
    {
        setValor1(v1=> v1+1)
    }
    function diminuir1()
    {
        setValor1(v1=> v1-1)
    }

    function aumentar2()
    {
        setValor2(v2=> v2+1)
    }
    function diminuir2()
    {
        setValor2(v2=> v2-1)
    }
    return(
        <>
            <p>Valor 1: {valor1}</p>
            <p>
                <button onClick={diminuir1}>-</button>
                <button onClick={aumentar1}>+</button>
            </p>

            <p>Valor 2: {valor2}</p>
            <p>
                <button onClick={diminuir2}>-</button>
                <button onClick={aumentar2}>+</button>
            </p>

            <hr />

            <h3>
                O resultado de {valor1} * {valor2} é igual a {valor1 * valor2}
            </h3>
        </>
    )
}