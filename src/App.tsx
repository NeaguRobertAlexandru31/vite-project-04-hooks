// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useCount } from './hooks/useCount'

const App = () => {

  /* Controller - Importo le funzioni che mi servono  */
  const { count, add, remove, reset} = useCount()

  return(

    /* View */
    <div>
      <h3>{count}</h3>
      <button onClick={add}>+</button>
      <button onClick={remove}>-</button>
      <button onClick={reset}>Reset</button>
    </div>

  )

}

export default App;
