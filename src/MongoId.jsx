import React, { useState } from 'react';

export default function MongoId() {
  const [idGenerado, setIdGenerado] = useState('');

  function generarIDAleatorio() {
    const caracteresHexadecimales = '0123456789abcdef';
    let id = '';

    for (let i = 0; i < 24; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresHexadecimales.length);
      id += caracteresHexadecimales[indiceAleatorio];
    }

    setIdGenerado(id);
  }

  function copiarAlPortapapeles(resultado) {
    const el = document.createElement('textarea');
    el.value = resultado;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }

  return (
    <div className="containerEpoch">
      <h2 className='tituloEpoch'>Generador de Id mongo</h2>
      <button onClick={generarIDAleatorio}>Generar id</button>
      {idGenerado && (
        <div className="resultadoEpoch">
          <div className="resultado" title='al hacer click se copia' onClick={() => copiarAlPortapapeles(idGenerado)}>{idGenerado}</div>
        </div>
      )}
    </div>
  );
}
