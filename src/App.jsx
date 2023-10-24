import { useState } from 'react'

import './App.css'
import Epoch from './Epoch';
import MongoId from './MongoId';
import GoogleTranslator from './GoogleTranslator';

function App() {
  const [cuponAleatorio, setCuponAleatorio] = useState('');
  const [dni, setDNI] = useState('');
  const [iban, setIBAN] = useState('');
  const [nombreApellido, setNombreApellido] = useState('');
  const [cupsGas, setCupsGas] = useState('');
  const [nie, setNIE] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [horaFin, setHoraFin] = useState('');
  const [diferenciaDeTiempo, setDiferenciaDeTiempo] = useState('');
  const [horasImputadas, setHorasImputadas] = useState('8'); // Valor predeterminado de 8 horas
  const [diferenciaHoras, setDiferenciaHoras] = useState('');




  function generarCUPSGas() {
    const distribuidoresGas = ['ES0020', 'ES0021', 'ES0022', 'ES0023']; // agregar los  que haga falta 
    const distribuidorAleatorio = distribuidoresGas[Math.floor(Math.random() * distribuidoresGas.length)];

    let numerosAleatorios = '';
    for (let i = 0; i < 14; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      numerosAleatorios += randomDigit.toString();
    }

    let letrasAleatorias = '';
    const letrasPosibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * letrasPosibles.length);
      letrasAleatorias += letrasPosibles[randomIndex];
    }

    const numeroCUPS = distribuidorAleatorio + numerosAleatorios + letrasAleatorias;
    setCupsGas(numeroCUPS);
  }

  function obtenerNombreAleatorio() {
    const nombres = ['Ana', 'Juan', 'María', 'Pedro', 'Luis', 'Carmen', 'Carlos', 'Laura', 'Miguel', 'Sofía', 'Matias', 'David', 'Abel', 'Baltasar', 'Clara', 'Dolores', 'Elena', 'Fernando', 'Gabriel', 'Hugo', 'Ignacio', 'Javier', 'Luisa', 'Manuel', 'Nicolás', 'Olivia', 'Pablo', 'Quintín', 'Ramón', 'Sara', 'Tomás', 'Ursula', 'Víctor', 'Walter', 'Xavier', 'Yolanda', 'Zacarías']
    return nombres[Math.floor(Math.random() * nombres.length)];
  }

  function obtenerApellidoAleatorio() {
    const apellidos = ['Gómez', 'López', 'Martínez', 'González', 'Rodríguez', 'Pérez', 'Fernández', 'Hernández', 'Ruiz', 'Díaz', 'Guajardo', 'Chicconi', 'Navas', 'Tadey', 'Ruiz', 'Ruani'];
    return apellidos[Math.floor(Math.random() * apellidos.length)];
  }


  function generarNumeroCUPS() {
    const distribuidor = ['ES002', 'ES039', 'ES028', 'ES036'];
    const distribuidorAleatorioLuz = distribuidor[Math.floor(Math.random() * distribuidor.length)];


    let numerosAleatorios = '';
    for (let i = 0; i < 14; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      numerosAleatorios += randomDigit.toString();
    }

    let letrasAleatorias = '';
    const letrasPosibles = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * letrasPosibles.length);
      letrasAleatorias += letrasPosibles[randomIndex];
    }

    const numeroCUPS = distribuidorAleatorioLuz + numerosAleatorios + letrasAleatorias;
    return numeroCUPS;
  }

  function handleGenerarCUPS() {
    const nuevoCuponAleatorio = generarNumeroCUPS();
    setCuponAleatorio(nuevoCuponAleatorio);
  }

  function generarDNI() {
    const numeroDNI = Math.floor(Math.random() * 100000000);

    const letrasDNI = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letraDNI = letrasDNI.charAt(numeroDNI % 23);

    const dniGenerado = `${numeroDNI}${letraDNI}`;
    setDNI(dniGenerado);
  }

  function obtenerLetraNIE(resto) {
    const letrasNIE = 'XYZ';
    return letrasNIE.charAt(resto);
  }

  function obtenerLetraNIE(resto) {
    const letrasNIE = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return letrasNIE.charAt(resto);
  }

  function obtenerLetraNIE(resto) {
    const letrasNIE = 'TRWAGMYFPDXBNJZSQVHLCKE';
    return letrasNIE.charAt(resto);
  }

  function generarNIE() {
    const letrasIniciales = 'XYZ';
    const letraInicial = letrasIniciales.charAt(Math.floor(Math.random() * letrasIniciales.length));

    let numeroNIE = '';
    for (let i = 0; i < 7; i++) {
      const randomDigit = Math.floor(Math.random() * 10);
      numeroNIE += randomDigit.toString();
    }

    const resto = parseInt(numeroNIE) % 23;
    const letraNIE = obtenerLetraNIE(resto);

    const nieGenerado = `${letraInicial}${numeroNIE}${letraNIE}`;
    setNIE(nieGenerado);
  }



  function generarIBAN() {
    const ibanNumeros = Array.from({ length: 22 }, () => Math.floor(Math.random() * 10));
    const ibanGenerado = `ES${ibanNumeros.join('')}`;
    setIBAN(ibanGenerado);
  }

  function generarNombreApellido() {
    const nombreAleatorio = obtenerNombreAleatorio();
    const apellido1Aleatorio = obtenerApellidoAleatorio();
    const apellido2Aleatorio = obtenerApellidoAleatorio();
    setNombreApellido(`${nombreAleatorio} ${apellido1Aleatorio} ${apellido2Aleatorio}`);
  }



  function copiarAlPortapapeles(resultado) {
    const el = document.createElement('textarea');
    el.value = resultado;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  }


  function calcularDiferenciaDeTiempo(horaInicio, horaFin) {
    const horaInicioObj = new Date(`1970-01-01T${horaInicio}`);
    const horaFinObj = new Date(`1970-01-01T${horaFin}`);

    if (isNaN(horaInicioObj.getTime()) || isNaN(horaFinObj.getTime())) {
      return 'Formato de hora incorrecto';
    }

    const diferenciaEnMilisegundos = horaFinObj - horaInicioObj;
    const minutosTotales = diferenciaEnMilisegundos / (1000 * 60);
    const horas = Math.floor(minutosTotales / 60);
    const minutos = Math.floor(minutosTotales % 60);

    const tiempoFormateado = `${horas} horas, ${minutos} minutos`;
    return tiempoFormateado;
  }

  function calcularMinutosTotales(horaInicio, horaFin) {
    const horaInicioObj = new Date(`1970-01-01T${horaInicio}`);
    const horaFinObj = new Date(`1970-01-01T${horaFin}`);
    const diferenciaEnMilisegundos = horaFinObj - horaInicioObj;
    return diferenciaEnMilisegundos / (1000 * 60);
}

function calcularDiferenciaHoras(minutosTotales, horasImputadas) {
    let diferenciaHoras = (minutosTotales / 60) - horasImputadas;
    diferenciaHoras -= 0.5; // Restar 30 minutos para el almuerzo

    let signo = '';
    if (diferenciaHoras < 0) {
        signo = '-';
        diferenciaHoras = Math.abs(diferenciaHoras);
    }

    const horasDiferencia = Math.floor(diferenciaHoras);
    const minutosDiferencia = Math.round((diferenciaHoras - horasDiferencia) * 60);

    return {
        signo,
        horasDiferencia,
        minutosDiferencia,
    };
}

function calcularTiempo() {
  const diferenciaTiempo = calcularDiferenciaDeTiempo(horaInicio, horaFin);
  const minutosTotales = calcularMinutosTotales(horaInicio, horaFin);
  const horasImputadasNumber = parseFloat(horasImputadas);
  
  const { signo, horasDiferencia, minutosDiferencia } = calcularDiferenciaHoras(minutosTotales, horasImputadasNumber);

  const diferenciaFormateada = `${signo}${horasDiferencia} horas, ${minutosDiferencia} minutos`;

  setDiferenciaDeTiempo(diferenciaTiempo);
  setDiferenciaHoras(diferenciaFormateada);
}

  return (
    <>

      <h1 style={{
        textAlign: 'center',
        color: '#09f',
        fontSize: '50px',
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        textShadow: '2px 2px 2px #000',
      }} >Generador de cosas</h1>

      <div className="container">
        <div className="boton">
          <button onClick={handleGenerarCUPS}>Generar CUPS LUZ </button>
          <div className="resultado" title='al hacer click se copia' onClick={() => copiarAlPortapapeles(cuponAleatorio)}>{cuponAleatorio}</div>

        </div>
        <div className="boton">
          <button onClick={generarCUPSGas}>Generar CUPS GAS </button>
          <div className="resultado" title='al hacer click se copia' onClick={() => copiarAlPortapapeles(cupsGas)}>{cupsGas}</div>
        </div>

        <div className="boton">
          <button onClick={generarDNI}>Generar DNI</button>
          <div className="resultado" title='al hacer click se copia' onClick={() => copiarAlPortapapeles(dni)}>{dni}</div>
        </div>

        <div className="boton">
          <button onClick={generarNIE}>Generar NIE</button>
          <div className="resultado" title='al hacer click se copia' onClick={() => copiarAlPortapapeles(nie)}>{nie}</div>
        </div>

        <div className="boton">
          <button onClick={generarIBAN}>Generar IBAN</button>
          <div className="resultado" title='al hacer click se copia' onClick={() => copiarAlPortapapeles(iban)}>{iban}</div>
        </div>
        <div className="boton">
          <button onClick={generarNombreApellido}>Generar Nombre y Apellido</button>
          <div className="resultado" title='al hacer click se copia' onClick={() => copiarAlPortapapeles(nombreApellido)}>{nombreApellido}</div>
        </div>
      </div>
      <div className="botonTime">
        <h3>Calcular Diferencia de Tiempo</h3>
        <input
          className='inputTime'
          type="time"
          placeholder="Hora de inicio (HH:MM)"
          value={horaInicio}
          onChange={(e) => setHoraInicio(e.target.value)}
        />
        <input
          className='inputTime'
          type="time"
          placeholder="Hora de fin (HH:MM)"
          value={horaFin}
          onChange={(e) => setHoraFin(e.target.value)}
        />
        <input
               className='inputTime'
               type="time"
          placeholder="Horas imputadas"
          value={horasImputadas}
          onChange={(e) => setHorasImputadas(e.target.value)}
        />
        <button onClick={calcularTiempo}>Calcular</button>
        {diferenciaDeTiempo && (
          <div className="resultado">{`Horas desde que fichaste: ${diferenciaDeTiempo}`}</div>
        )}
        {diferenciaHoras && (
          <div className="resultado">{`Diferencia de Horas entre fichaje y imputacion: ${diferenciaHoras}`}</div>
        )}
      </div>
      <div>
        <Epoch />
      </div>
      <div>
        <MongoId />
      </div>

      {/* <div>
        <h1>Traductor de Google</h1>
        <GoogleTranslator />
      </div> */}
    </>
  );
}

export default App
