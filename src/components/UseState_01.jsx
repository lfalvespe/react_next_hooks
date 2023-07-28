import { useState } from "react";

export default function () {

    const [valor, setValor] = useState(0);

    function decrease()
    {
        setValor(v=> v - 1)
    }

    function increase()
    {
        setValor(v=> v + 1)
    }

    return(
        <>
            <p>Valor: {valor}</p>
            <button onClick={decrease}>- Decrease</button>
            <button onClick={increase}>+ Increase</button>
        </>

    )
}