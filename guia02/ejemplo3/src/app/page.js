"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {


  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState(null);

  function validar() {
    if (numero1 != '' && numero2 != '')
      return true;
    else if (numero1 == '')
      setResultado("Debe digitar el primer número");
    else if (numero2 == '')
      setResultado("Debe digitar el segundo número");
  }

  const sumar = () => {
    if (validar()) {
      const resultadoSuma = parseFloat(numero1) + parseFloat(numero2);
      setResultado(`Resultado de la suma: ${resultadoSuma}`);
    }

  };

  const restar = () => {
    if (validar()) {
      const resultadoResta = parseFloat(numero1) - parseFloat(numero2);
      setResultado(`Resultado de la resta: ${resultadoResta}`);
    }
  };

  const multiplicar = () => {
    if (validar()) {
      const resultadoMulti = parseFloat(numero1) * parseFloat(numero2);
      setResultado(`Resultado de la multiplicación: ${resultadoMulti}`);
    }

  };

  const dividir = () => {
    if (validar()) {
      if (numero2 != 0) {
        const resultadoDivision = parseFloat(numero1) / parseFloat(numero2);
        setResultado(`Resultado de la división: ${resultadoDivision}`);
      }
      else {
        setResultado("Resultado de la división: INDEFINIDO");
      }
    }

  };

  const potencia = () => {
    if(validar()){
      const resultado = Math.pow(parseFloat(numero1), parseFloat(numero2));
      setResultado(`Resultado de la potenciación: ${resultado}`);
    }

  }

  const raiz = () => {
    setNumero2('');
    if(numero1 != ''){
      if (numero1 >= 0) {
        const resultado = Math.sqrt(parseFloat(numero1));
        setResultado(`Resultado de la raíz cuadrada: ${resultado}`);
      }
      else {
        setResultado("No se puede obtener la raíz cuadrada de un número negativo")
      }
    }
    else{
      setResultado("Debe digitar el número");
    }
    
  }


  function reset() {
    setNumero1('');
    setNumero2('');
    setResultado(null);
  }

  return (
    <main className={styles.main}>
      <div className={styles.calculadora}>
        <h1>MI CALCULADORA</h1>
        <br></br>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 1:</label>
          <input className={styles.inputnum} type="number" value={numero1} onChange={(e) => setNumero1(e.target.value)}></input>
        </div>
        <div className={styles.numeros}>
          <label className={styles.text}>Número 2:</label>
          <input className={styles.inputnum} type="number" value={numero2} onChange={(e) => setNumero2(e.target.value)}></input>
        </div>
        <div>
          <button className={styles.button} onClick={sumar}>Sumar</button>
          <button className={styles.button} onClick={restar}>Restar</button>
          <br></br>
          <button className={styles.button} onClick={multiplicar}>Multiplicar</button>
          <button className={styles.button} onClick={dividir}>Dividir</button>
          <br></br>
          <button className={styles.button} onClick={potencia}>Potenciación</button>
          <button className={styles.button} onClick={raiz}>Raíz cuadrada</button>
          <button className={styles.reiniciar} onClick={reset}>Reiniciar</button>
        </div>
        {resultado && <div className={styles.resultado}>{resultado}</div>}

      </div>
    </main>
  );
}
