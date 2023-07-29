import React from "react";

// import HookState_01 from "./components/UseState_01";
// import HookState_02 from "./components/UseState_02";
// import HookState_03 from "./components/UseState_03";
// import HookState_04 from "./components/UseState_04";
import HookState_05 from "./components/UseState_05";

export default function () {
    return(
        <>
            <h1>React Hooks - useState</h1>
            <hr />
            <HookState_05 />
            
        </>
    )
}




// 1 - Criar um componente que vai apresentar um useState (valor)
// 2 - Criar outro componente, a ser apresentado dentro do componente anterior , que vai atualiar o useState do componente "pai".  