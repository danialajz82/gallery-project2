import { useState } from "react";

const useCounter = (init , value) => {
  const [count, setCount] = useState(init);
  const increment = () => {
    setCount(count + value);
  };
  const dicrement = () => {
    setCount(count - value);
  };
  const reset = () => {
    setCount(init);
  };
  return [count, increment, dicrement, reset];
};

export default useCounter;
