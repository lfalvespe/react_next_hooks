import { useState } from "react"


export default function () {

    const [client, setClient] = useState(
        {
            name: '',
            nickname: '',
            city: '',
            mail: ''
        }
    )

    return(
        <>

            <h3>Client</h3>
            <ul>
                <li><h5>Name: {client.name}</h5></li>
                <li><h5>Nick: {client.nickname}</h5></li>
                <li><h5>City: {client.city}</h5></li>
                <li><h5>Mail: {client.mail}</h5></li>
            </ul>
            <hr />

            <button onClick={()=> setClient({...client, name: 'Maria'})}>Name</button>
            <button onClick={()=> setClient({...client, nickname: 'Molly'})}>Nick</button>
            <button onClick={()=> setClient({...client, city: 'Brazil'})}>City</button>
            <button onClick={()=> setClient({...client, mail: 'molly@gmail.com'})}>Mail</button>

            <div className="exerc">
                <hr />
                <h3>Exercício:</h3>
                <p>1 - Criar um componente que contém um objeto 'client' com as propriedades: 'name', 'nickname', 'city', mail'
                </p>
                <p>1 - O componente tem que ter 4 botões</p>
                <p>2 - Cada botão altera o valor de uma das propriedades</p>
                <p>3 - Sem executar funções indiretas</p>
                <p>4 - Os valores devem ser apresentados</p>
                <hr />
            </div>

        </>
    )
}