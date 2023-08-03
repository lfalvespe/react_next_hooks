import React, {useState} from "react"

export default function () {

    const[login, setLogin] = useState(false)
    const [btnText, setBtnText] = useState('Login')
  

    return(
        <>

            <h3>Condicional Rendering:  {login && <span>"Usuário logado"</span>}</h3>
            <hr />

            
            <button onClick={()=> { setLogin(!login); setBtnText(login?'Login':'Logout') }}>
                {btnText}
            </button>
          
            

            
            <div className="exerc">
                <hr />
                <h3>Exercício:</h3>
                <p>1 - Apresentar um parágrafo com "Usuário logado"</p>
                <p>2 - Um botão vai controlar se o usuário está logado ou não (Fake)</p>
                <p>3 - Alterando o valor de um state</p>
                <hr />
            </div>
        </>
    )
}

