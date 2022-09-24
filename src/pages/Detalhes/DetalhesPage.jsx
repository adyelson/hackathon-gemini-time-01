
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";

// import { useNavigate } from "react-router-dom";
import { getDetalhesRestaurante } from "../../services/detalhes.service";
import "./style.css";

function DetalhesPage() {
  const  {id} = useParams();
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

  return(
    <div>
      <div>
        Categoria
      </div>
      {cardapio?.map(cardapio => (
        <div key={cardapio.id}>
          {cardapio.categoria}
        </div>
      ))}
      <div>
        {descricao}
      </div>
    </div>
  )
}

export default DetalhesPage;