
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";

// import { useNavigate } from "react-router-dom";
import { getDetalhesRestaurante } from "../../services/detalhes.service";
import "./style.css";

function DetalhesPage() {
  const  {id} = useParams();
  const [cardapio, setCardapio] = useState();

  useEffect(() => {
    getDetalhesRestaurante(id).then((response) => {
      setCardapio(response.cardapio)
    });
  }, []);

  return(
    <div className="sub-header">
        <Typography variant="body1" color="primary">
          Categoria
        </Typography>
      {cardapio?.map(cardapio => (
        <div key={cardapio.id}>
          {cardapio.categoria}
        </div>
      ))}
    </div>
  )
}

export default DetalhesPage;