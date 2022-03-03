import imagem from "../../assets/imagem.jpg"
import { perfil } from "../../Data"
import "./style.css"
export function Card(){
    return(
        <div className="card_body">
            <img src={imagem} alt="Homem_rico" className="imagem_homem" ></img>
            <h2 className="name_card">{perfil.nome}</h2>
            <h2 className="sobrenome_card">{perfil.sobrenome}</h2>
            <p>{perfil.descricao}</p>

        </div>
    )
}