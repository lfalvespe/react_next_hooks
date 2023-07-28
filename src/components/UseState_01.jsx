import { useState } from "react";

export default function () {

    const [valor, setValor] = useState(0);

    return(
        <>
            <p>Valor: {valor}</p>
            <button onClick={()=> setValor(v=> v - 1)}>- Decrease</button>
            <button onClick={()=> setValor(v=> v + 1)}>+ Increase</button>
            <button onClick={()=> setValor(0)}>Reset</button>
        </>

    )
}