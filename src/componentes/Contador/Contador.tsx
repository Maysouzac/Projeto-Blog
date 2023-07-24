import {useState} from "react"

function Contador() {
    const [valor,setvalor] =  useState(0)

    function somarMaisUm(){
        setvalor(valor + 1)
    }

    return (
    <div>
        <p> O valor do estado é : { valor }   </p>
        <button onClick={somarMaisUm}> Adicionar +1</button>
    </div>
  )
}

export default Contador