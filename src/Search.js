import React, { useState } from 'react';

function ProductSearch({ onSearch }) {
  const [ProcurarNome, setProcurarNome] = useState('');

  const handleSearch = () => {
    onSearch(ProcurarNome);
  };

  return (
    <div>
      <input

        className='styleform'
        type="text"
        placeholder=""
        value={ProcurarNome}
        onChange={(e) => setProcurarNome(e.target.value)}

      />
      <div className='divbotaopesquisa'>
        <button onClick={handleSearch} className='buttonpesquisa'>Procurar</button></div>
    </div>
  );
}

export default ProductSearch;
