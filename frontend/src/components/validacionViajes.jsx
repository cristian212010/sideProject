import React from 'react';

function TuComponente({ respuesta }) {

  return (
    <div>
      {respuesta === 'si' ? (
        <span role="img" aria-label="Chulo">&#10004;</span>
      ) : (
        <span role="img" aria-label="Equis">&#10060;</span>
      )}
    </div>
  );
}

export default TuComponente;
