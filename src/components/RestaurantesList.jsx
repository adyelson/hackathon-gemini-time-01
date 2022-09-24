import { Typography } from "@material-ui/core";

function RestaurantesList(props) {
    const restaurantes = props.restaurantes;

    return (
        <div>
            <div className="sub-header">
                <Typography variant="body1" color="primary">
                    {props.nome} {props.cifras}
                </Typography>
            </div>
            {restaurantes?.map(restaurante => (
                <div key={restaurante.id}>
                    <div key={restaurante.id} className="card-restaurante">
                        <img src={restaurante.imagem}
                            alt={restaurante.nome}/>
                        <div className="card-texto-restaurante">
                            <span>{restaurante.nome}</span>
                            <span>{restaurante.distancia + " km"}</span>
                            <span>{"★ " + restaurante.nota}</span>
                            <span>{restaurante.tempo_medio}</span>
                            <span> - R$ {restaurante.valor_entrega}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default RestaurantesList;