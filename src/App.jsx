import React from "react";

// import HookState_01 from "./components/UseState_01";
// import HookState_02 from "./components/UseState_02";
// import HookState_03 from "./components/UseState_03";
// import HookState_04 from "./components/UseState_04";
// import HookState_05 from "./components/UseState_05";
import HookState_06 from "./components/UseState_06";

export default function () {
    return(
        <>
            <h1>React Hooks - useState</h1>
            <hr />
            <HookState_06 />
        </>
    )
}


// Um componente pai vai receber atualização de valores de dois componentes filhos.
// Esses componentes filhos são instâncias do mesmo componente contador (inc e dec)
// Um dos componentes incrementa e decrementa de 5 em 5 e o outro de 10 em 10. 
// No componente pai, vai ser apresentado o resultado da adição dos valores controlados pelos dois componentes filhos.