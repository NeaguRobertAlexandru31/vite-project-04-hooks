import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

const App = () => {

  /* Create hook */
  const [count, setCount] = useState<number>(0);  /* Tipizzazione useState a <number> */

  const add = () => {                             /* Incremento */
    setCount(count + 1);
  }
  const remove = () => {                          /* Decremento */
    setCount(count - 1);
  }
  const reset = () => {                           /* Reset */
    setCount(0);
  }

  return(
    <div>
      <h3>{count}</h3>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
      <button onClick={reset}>Reset</button>
    </div>
  )

}

export default App;
