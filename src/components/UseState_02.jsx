import { useState } from "react";

export default function () {

    const [valor, setValor] = useState(0);

    function increase()
    {
        setValor(v=> v + 1)
    }

    function decrease()
    {
        setValor(v=> v - 1)
    }

    function increase_plus(a)
    {
        setValor(v=> v + a)
    }

    return(
        <>
            <p>Valor: {valor}</p>
            <button onClick={decrease}>- Decrease</button>
            <button onClick={increase}>+ Increase</button>
            <button onClick={()=> increase_plus(10)}>Increase plus</button>
        </>

            // Para passar parâmetros das funções dentro do onClick, é necessário utilizar uma Arrow Function
    )
}