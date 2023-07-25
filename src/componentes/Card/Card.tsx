//Define o tipo e as info. que o Card deve receber(Props)
interface CardProps{
    titulo: string
    descricao: string
}

function Card({ titulo, descricao}: CardProps) {
    return(
        <div className="
        border-4 border-[#dc143c] 
        m-8 p-8 flex-col justify-items-center items-center">
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </div>
    )
}
export default Card