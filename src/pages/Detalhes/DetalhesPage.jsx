import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  Typography,
  CardContent,
} from "@material-ui/core";
import { getDetalhesRestaurante } from "../../services/detalhes.service";
import "./style.css";

function DetalhesPage() {
  const { id } = useParams();
  const [cardapio, setCardapio] = useState();
  const [descricao, setDescricao] = useState();
  const [distancia, setDistancia] = useState();
  const [endereco, setEndereco] = useState();
  const [imagem, setImagem] = useState();
  const [nome, setNome] = useState();
  const [nota, setNota] = useState();
  const [tempo_medio, setTempoMedio] = useState();
  const [valor_entrega, setValorEntrega] = useState();

  useEffect(() => {
    getDetalhesRestaurante(id).then((response) => {
      setCardapio(response.cardapio);
      setDescricao(response.descricao);
      setDistancia(response.distancia);
      setEndereco(response.endereco);
      setImagem(response.imagem);
      setNome(response.nome);
      setNota(response.nota);
      setTempoMedio(response.tempo_medio);
      setValorEntrega(response.valor_entrega);
    });
  }, []);

  function ListaCardapio() {
    return (
      <div className="div-principal">
        {cardapio?.map((cardapio, i) => (
          <div key={i} className="cardapio-categoria">
            {cardapio.categoria}
            {cardapio.itens?.map((itens, i) => (
              <Card key={i} className="card-itens">
                <img src={itens.imagem} alt={itens.descricao} />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {itens.nome}
                  </Typography>
                  <Typography variant="body2">{itens.descricao}</Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="detalhes">
          <div className="container-detalhes">
          <img
            className="imgCategory"
            src={imagem}
          />
          <div className="detalhes-restaurante">
          <span className="restaurante-title">{nome}</span>
          <span className="restaurante-distancia">{distancia} km</span>
          <span className="restaurante-nota">★{nota}</span>
          <span className="restaurante-tempo-frete">{tempo_medio} - {valor_entrega}</span>
          <div>{descricao}</div>
          </div>
      </div>
      <ListaCardapio />
    </div>
  );
}

export default DetalhesPage;
