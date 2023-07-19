import { useState } from 'react'

import './App.css'
import Epoch from './Epoch';
import MongoId from './MongoId';

function App() {
  const [cuponAleatorio, setCuponAleatorio] = useState('');
  const [dni, setDNI] = useState('');
  const [iban, setIBAN] = useState('');
  const [nombreApellido, setNombreApellido] = useState('');
  const [cupsGas, setCupsGas] = useState('');
  const [nie, setNIE] = useState('');


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
      <div>
        <Epoch />
      </div>
      <div>
        <MongoId />
      </div>
    </>
  );
}

export default App
