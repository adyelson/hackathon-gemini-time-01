import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardMedia,  Grid, Typography, CardContent } from "@material-ui/core";

// import { useNavigate } from "react-router-dom";
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

  function ListaCardapio(){
    return (
      <div className="div-principal">
        {cardapio?.map((cardapio, i) => (
          <div key={i} className="cardapio-categoria">
            {cardapio.categoria}
            {cardapio.itens?.map((itens,i) => (
            <Card key={i} className="card-itens">
              <img src={itens.imagem} alt={itens.descricao}/>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {itens.nome}
                  </Typography>
                  <Typography variant="body2">
                    {itens.descricao}
                  </Typography>
                </CardContent>
            </Card>
            ))}
          </div>
        ))}
      </div>
    )
  }

  return(
    <div className="detalhes">
      <div className="detalhes-restaurante">

          <div >
            <img className="imgCategory" src="https://i.imgur.com/iJgQdLB.jpg"></img>
          </div>
      <div>
       <p className="restaurante-title" >NOME REstaurante</p> 
      <p> 2,4km</p>
      <p>*4,7</p>
      <p>40-50min</p>
      <div>
        {descricao}
      </div>
      </div>
    </div>
 {cardapio?.map(cardapio => (
        <div key={cardapio.id}>
          {cardapio.categoria}
        </div>
      ))}


        <div className="containerCategorias">
          <div >
            <img className="imgCategory" src="https://i.imgur.com/w1UjttV.jpg"></img>
          </div>
          <div className="item-detalhes">
            <p className="item-titulo">Batata</p>
            <p>Batata frita e sequinha.</p>
            <p className="valor"> R$10,00</p>
          </div>

        </div>
        
      
        
    </div>
  )
}

export default DetalhesPage;
