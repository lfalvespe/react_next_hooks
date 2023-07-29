import { useState } from "react";

import '../UseState_04.css'

export default function ({inc}) {

    const [valor, setvalor] = useState(0)
   

    function decrement(n)
    {
        setvalor(v=> v-n)
    }
    function increment(n)
    {
        setvalor(v=> v+n)
    }

    return(
        <>
            <button onClick={()=> decrement(inc)}>- {inc}</button>
            <p>valor: {valor}</p>
            <button onClick={()=> increment(inc)}>+ {inc}</button>
        </>
    )
}