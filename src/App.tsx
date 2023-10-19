import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { useCount } from "./hooks/useCount";
import { useEffect } from "react";

const App = () => {

  /* Controller - Importo le funzioni che mi servono da "useCount.ts" */
  const { count, add, remove, reset, moltiplicatore } = useCount();
  const [lap, setLap] = useState(0);

  /* Stampa valore count + lap */
  useEffect (() => {
    if(count % 2 === 0){
      setLap(lap + 1);
    }
  }, [count])

  return (
    /* View */
    <div>
      <h3>{count}</h3>
      <h4>Lap: {lap}</h4>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={moltiplicatore}>Moltiplicatore</button>
    </div>
  );
};

export default App;
