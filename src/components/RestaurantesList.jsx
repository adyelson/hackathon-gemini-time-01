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
                    {restaurante.nome}
                </div>
            ))}
        </div>
    );
}

export default RestaurantesList;