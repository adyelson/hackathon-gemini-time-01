import { Container, Typography, CircularProgress } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getRestaurantes } from "../../services/restaurantes.service";
import "./style.css";

function RestaurantesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
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
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Baratinho <span>(</span>$ <span>$ $ $ $)</span>
        </Typography>
      </div>
        {restaurantesBaratinho?.map(restaurante => (
          <div 
            key={restaurante.id} 
            className="card-restaurante"
            onClick={() => navigate(`/detalhes/${restaurante.id}`)}
          >
            <img src={restaurante.imagem}
              alt={restaurante.nome}/>
            <div className="card-texto-restaurante">
              <span>{restaurante.nome}</span>
              <span>{restaurante.distancia + " km"}</span>
              <span>{"★ " + restaurante.nota}</span>
              <span>{restaurante.tempo_medio}</span>
              <span>{(restaurante.valor_entrega === 0 ) ? "Grátis" : ("R$" + restaurante.valor_entrega) }</span>
            </div>
          </div>
        ))}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          No Preço <span>(</span>$ $ $<span> $ $)</span>
        </Typography>
      </div>
      {restaurantesNoPreco?.map(restaurante => (
        <div 
          key={restaurante.id} 
          className="card-restaurante"
          onClick={() => navigate(`/detalhes/${restaurante.id}`)}
          >
          <img src={restaurante.imagem}
            alt={restaurante.nome}/>
          <div className="card-texto-restaurante">
            <span>{restaurante.nome}</span>
            <span>{restaurante.distancia + " km"}</span>
            <span>{"★ " + restaurante.nota}</span>
            <span>{restaurante.tempo_medio}</span>
            <span>{(restaurante.valor_entrega === 0 ) ? "Grátis" : ("R$" + restaurante.valor_entrega) }</span>
          </div>
        </div>
      ))}
      <div className="sub-header">
        <Typography variant="body1" color="primary">
          Caro, mas vale a pena <span>(</span>$ $ $ $ $<span>)</span>
        </Typography>
      </div>
      {restaurantesCaro?.map(restaurante => (
        <div 
          key={restaurante.id} 
          className="card-restaurante"
          onClick={() => navigate(`/detalhes/${restaurante.id}`)}
        >
          <img src={restaurante.imagem}
            alt={restaurante.nome}/>
          <div className="card-texto-restaurante">
            <span>{restaurante.nome}</span>
            <span>{restaurante.distancia + " km"}</span>
            <span>{restaurante.nota}</span>
            <span>{restaurante.tempo_medio}</span>
            <span>{(restaurante.valor_entrega === 0 ) ? "Grátis" : ("R$" + restaurante.valor_entrega) }</span>
          </div>
        </div>
      ))}
    </Container>
  )
}

export default RestaurantesPage;