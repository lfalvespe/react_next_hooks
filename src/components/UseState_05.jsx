import { useState } from "react";

import UseState_05a from "./UseState_05a";

export default function () {

    const [valor, setValor] = useState(0)

    function atualizar() {
        setValor(v=> v +1)
    }

    return(
        <>
            <p>Valor: {valor}</p>
            <UseState_05a funcao={atualizar}/>
            <hr />


            <div className="exerc">
                <hr />
                <p>Criar um componente que vai apresentar um useState (valor)</p>
                <p>
                    Criar outro componente, a ser apresentado dentro do componente anterior , que vai atualiar o useState do componente "pai".
                </p>
                <hr />
            </div>
        </>
    )
}
