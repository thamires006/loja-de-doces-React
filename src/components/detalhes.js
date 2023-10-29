import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function Detalhes() {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    fetch(`https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/produtosTech4Doces/${id}`)
      .then(response => response.json())
      .then(data => {
        setProduto(data);
      })
      .catch(error => {
        console.error('Erro para achar o produto:', error);
      });

  }, [])

  return (
    <div className="info">
      {!produto && <p>Carregando...</p>}
      {produto && (
        <>
          <div id="totaldoce" className="doisdoces">
            <img className="imagemdetalhes" alt="imagem doce" src={produto.imagem}></img>
            <strong>{produto.titulo}</strong>
            <p>{produto.descricao}</p>
            <p>{produto.valor}</p>
          </div>

          <div className="centralizabutton">
            <button onClick={() => alert("Comprando o produto.")} className="mexer">Comprar</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Detalhes