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
                        <span className="restaurante-title">{restaurante.nome}</span>
                        <span className="restaurante-distancia">{restaurante.distancia + " km"}</span>
                        <span className="restaurante-nota">{"★ " + restaurante.nota}</span>
                        <span className="restaurante-tempo-frete">{restaurante.tempo_medio} + {(restaurante.valor_entrega === 0 ) ? "Grátis" : ("R$" + restaurante.valor_entrega) }</span>
                    </div>
                </div>
            ))}
        </>
    );
}

export default RestaurantesList;