import React, { useCallback, useEffect, useState } from "react";
import "../02-useEffect/effects.css";
import ShowIncrement from "./ShowIncrement";

const CallbackHooks = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  /* const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter]); */

  const increment = useCallback(
    (num) => {
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  useEffect(() => {
    // ???
  }, [increment]);

  return (
    <div>
      <h1>usCallback Hook</h1>
      <h3>Counter: {counter}</h3>
      <hr />

      <ShowIncrement increment={increment} />
    </div>
  );
};

export default CallbackHooks;
