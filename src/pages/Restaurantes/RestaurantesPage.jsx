import { Container, Typography, CircularProgress } from "@material-ui/core";
import RestaurantesList from "../../components/RestaurantesList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantes } from "../../services/restaurantes.service";
import "./style.css";

function RestaurantesPage() {
  const { id } = useParams();
  const [nomeCategoria, setNomeCategoria] = useState([]);
  const [restaurantesBaratinho, setRestaurantesBaratinho] = useState();
  const [restaurantesNoPreco, setRestaurantesNoPreco] = useState([]);
  const [restaurantesCaro, setRestaurantesCaro] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getRestaurantes(id).then((response) => {
      setNomeCategoria(response.categoria)
      setRestaurantesBaratinho(response.baratinho);
      setRestaurantesNoPreco(response.no_preco);
      setRestaurantesCaro(response.caro);
      setLoading(false);
    })
  }, []);

  const cifrasBaratinho = <span><span>(</span>$ <span>$ $ $ $)</span></span>;
  const cifrasNoPreco = <span><span>(</span>$ $ $<span> $ $)</span></span>;
  const cifrasCaro = <span><span>(</span>$ $ $ $ $<span>)</span></span>;

  return (  
    <Container class="restaurantes">
      <Typography variant="h5" align="center" color="primary" className="title">
        RESTAURANTES: {nomeCategoria}
      </Typography>
      {loading && (
        <div className="loading">
          <CircularProgress color="primary" />
        </div>
      )}
      <RestaurantesList 
        restaurantes={restaurantesBaratinho}
        nome={"Baratinho"}
        cifras={cifrasBaratinho}
      />
      <RestaurantesList 
        restaurantes={restaurantesNoPreco}
        nome={"No preço"}
        cifras={cifrasNoPreco}
      />
      <RestaurantesList 
        restaurantes={restaurantesCaro}
        nome={"Caro, mas vale a pena"}
        cifras={cifrasCaro}
      />
    </Container>
  )
}

export default RestaurantesPage;