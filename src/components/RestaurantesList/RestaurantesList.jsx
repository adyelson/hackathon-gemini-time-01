import { Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function RestaurantesList(props) {
    const navigate = useNavigate();
    const restaurantes = props.restaurantes;

    return (
        <>
            <div className="sub-header">
                <Typography variant="body1" color="primary">
                    {props.nome} {props.cifras}
                </Typography>
            </div>
            {restaurantes?.map(restaurante => (
                <div 
                    key={restaurante.id} 
                    className="card-restaurante"
                    onClick={() => navigate(`/detalhes/${restaurante.id}`)}
                >
                    <img
                        src={restaurante.imagem}
                        alt={restaurante.nome}
                    />
                    <div className="card-texto-restaurante">
                        <span>{restaurante.nome}</span>
                        <span>{restaurante.distancia + " km"}</span>
                        <span>{"★ " + restaurante.nota}</span>
                        <span>{restaurante.tempo_medio}</span>
                        <span>{(restaurante.valor_entrega === 0 ) ? "Grátis" : ("R$" + restaurante.valor_entrega) }</span>
                    </div>
                </div>
            ))}
        </>
    );
}

export default RestaurantesList;