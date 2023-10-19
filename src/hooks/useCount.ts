import { useState } from "react";

export const useCount = (max?: number) => {
  /* Controller - Hook */
  const [control, setControl] =
    useState<boolean>(false); /* Tipizzazione useState */
  const [count, setCount] =
    useState<number>(0); /* Tipizzazione useState a <number> */

  const add = () => {
    /* Incremento */
    if (!control) {
      if (max && count < max) {
        setCount(count + 1);
      }
      if (max == undefined) {
        setCount(count + 1);
      }
    } else {
      if (max && count < max) {
        setCount(count * 2);
      }
      if (max == undefined) {
        setCount(count * 2);
      }
    }
  };
  const remove = () => {
    /* Decremento */
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    /* Reset */
    setCount(0);
  };

  const moltiplicatore = () => {
    setControl(!control);
  };

  return {
    count,
    add,
    remove,
    reset,
    moltiplicatore,
  };
};
