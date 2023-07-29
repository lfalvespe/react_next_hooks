import React from "react";

// import HookState_01 from "./components/UseState_01";
// import HookState_02 from "./components/UseState_02";
// import HookState_03 from "./components/UseState_03";
import HookState_04 from "./components/UseState_04";

export default function () {
    return(
        <>
            <h1>React Hooks - useState</h1>
            <hr />
            <HookState_04 />
            
        </>
    )
}




// 1 - Criar um componente que vai apresentar 3 contadores criados a partir do mesmo componente 
// 2 - Apresentar esses componentes lado a lado
// 3 - O primeiro componente dev eincrementar e decrementar de 1 em 1
// 4 - O segundo de 5 em 4
// 5 - O terceiro de 10 em 10