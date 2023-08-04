import React, {useState} from "react"


import '../UseState_11.css'

export default function () {

    const [ligado, setLigado] = useState(true)
    const class1 = 'paragrafo'
    const class2 = 'paragrafo destaque'

    return(
        <>
            <h3>Condicional Rendering: <span style={{color:"yellow"}}>Change CSS class</span></h3>
            <hr />

            <p className={ligado ? class1 : class2}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati tempora quod sunt incidunt ut deleniti explicabo perspiciatis tenetur modi, nemo velit quae ea esse! Incidunt, nemo. Similique officiis tenetur itaque.
            </p>

            <button onClick={()=> setLigado(!ligado)}>Destacar</button>


           
            <div className="exerc">
                <hr />
                <h3>Exercício:</h3>
                <p>1 - Temos um botão e um parágrafo</p>
                <p>2 - O parághrafo tem uma classe de 'CSS (parágrafo)</p>
                <p>3 - Adicionalmente tem outra classe (classDois)</p>
                <p>4 - A ideia é o botão alternar mantendo a classe parágrafo</p>
                <p>5 - Obviamente, o resultado da alternância de classes deve refletir-se no aspecto visual do elemento.</p>
                <hr />
            </div>
        </>
    )
}

