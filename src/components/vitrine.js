import React, { useEffect, useState } from 'react';
import ItemVitrine from './itemvitrine';
import ProductSearch from '../Search';
import styled from '@emotion/styled';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin: 10px;
  `;

function Vitrine() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [produtos, setProdutos] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch("https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/produtosTech4Doces")
      .then(response => response.json())
      .then(data => {
        setProdutos(data);
      })
      .catch(error => {
        console.error('Erro para achar o produto:', error);
      });
  }, []);


  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setErrorMessage('');
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setErrorMessage('');
  };

  const handleSenhaChange = (event) => {
    setSenha(event.target.value);
    setErrorMessage('');
  };

  const validarEmail = () => {
    var arroba = email.indexOf('@');
    var ponto = email.lastIndexOf('.');
    var dezCaracteres = email.length;

    if (dezCaracteres <= 10) {
      alert("Erro: O e-mail deve ter mais de 10 caracteres");
    } else {
      if (arroba === -1 || ponto === -1 || arroba > ponto) {
        alert('Digite um e-mail válido!');
      } else {
        alert("O E-mail " + email + " foi cadastrado com sucesso!");
        doPostCadastro();
      }
    }
  };

  const handleSubmit = () => {
    if (!isChecked) {
      setErrorMessage('Você precisa aceitar os termos de uso!');
    } else {
      validarEmail();
    }
  };

  const doPostCadastro = async () => {
    fetch('https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/cadastro', {
      method: 'POST',
      body: JSON.stringify({
        "email": email,
        "senha": senha
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
  }

  const handleSearchByTitle = (searchQuery) => {
    let url = "https://64cc3a7e2eafdcdc8519b754.mockapi.io/tham/produtosTech4Doces"
    if (searchQuery) {
      url = `${url}?titulo=${searchQuery}`
    }

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setProdutos(data);
      })
      .catch(error => {
        console.error('Erro para achar o produto:', error);
      });
  };


  return (
    <>
      <div className="vitrine">
        <StyledDiv className='divprocurar'>
          <ProductSearch onSearch={handleSearchByTitle} />
        </StyledDiv>
        <div className="linha">
          {produtos.map(produto => <ItemVitrine produto={produto} />)}
        </div>
      </div>
      <div className="styleform">
        <label>
          <input
            type="checkbox"
            id="aceito"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          Aceito os termos de uso
        </label>
        <div id="checkboxErro" style={{ color: 'red' }}>
          {errorMessage}
        </div>
        <input type="text" id="emails" value={email} onChange={handleEmailChange} placeholder="Digite seu email" />
        <input type="password" value={senha} onChange={handleSenhaChange} placeholder="Digite sua senha" />
        <button onClick={handleSubmit} className="enviar">Enviar</button>
      </div>
    </>
  );
}

export default Vitrine;