import { Link } from "react-router-dom"

const ItemVitrine = ({ produto }) => (
    <div className="totaldoce">
        <img src={produto.imagem}
            width="80%" height="30%" className="imgsdoces" alt="Imagem de Cupcake"></img>
        <div className="nomesepreço">
            <div>
                <h5>{produto.titulo}</h5>
            </div>
            <p className="descricaovitrine">{produto.descricao}</p>

            <Link className="btnmaisinfo" onClick={() => { }} to={`/produto/${produto.id}`}>Mais informações</Link>
        </div>
    </div>
);

export default ItemVitrine;