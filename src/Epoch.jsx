import React, { useState } from 'react';

export default function Epoch() {
  const [timestamp, setTimestamp] = useState('');
  const [fechaLegible, setFechaLegible] = useState('');
  const [fechaObjeto, setFechaObjeto] = useState(null);

  function convertirTimestampAFechaLegible(timestamp) {
    const date = new Date(timestamp * 1000);

    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    };

    const fechaLegible = date.toLocaleString('es-ES', options);
    return fechaLegible;
  }

  function handleMostrarFecha() {
    if (!timestamp) return;

    const fechaLegible = convertirTimestampAFechaLegible(parseInt(timestamp));
    setFechaLegible(fechaLegible);

    const dateObj = new Date(parseInt(timestamp) * 1000);
    setFechaObjeto(dateObj);
  }

  return (
    <div className="containerEpoch">
      <h2 className='tituloEpoch'>Epoch</h2>
      <div className='contaInpu' >
        <input
        className='inputEpoch'
          type="text"
          value={timestamp}
          onChange={(e) => setTimestamp(e.target.value)}
          placeholder="Introduce el timestamp"
        />
        <button onClick={handleMostrarFecha}>Mostrar fecha legible</button>
      </div>
      {fechaLegible && fechaObjeto && (
        <div className="resultadoEpoch">
          <div>Su fecha {fechaLegible}</div>
        </div>
      )}
    </div>
  );
}