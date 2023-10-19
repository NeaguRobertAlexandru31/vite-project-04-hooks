import { useState } from "react";

export const useCount = () => {

  /* Controller - Hook */
  const [count, setCount] =
    useState<number>(0); /* Tipizzazione useState a <number> */

  const add = () => {
    /* Incremento */
    setCount(count + 1);
  };
  const remove = () => {
    /* Decremento */
    setCount(count - 1);
  };
  const reset = () => {
    /* Reset */
    setCount(0);
  };

  return {
    count, add, remove, reset,
  }
};