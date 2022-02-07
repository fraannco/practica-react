import React, { useState } from "react";
import { useRef } from "react/cjs/react.production.min";
import "../02-useEffect/effects.css";
import MultipleCustomHooks from "../03-examples/MultipleCustomHooks";

const RealExampleRef = () => {
  const [show, setShow] = useState(true)
  return (
    <div>
      <h1>Real Example Ref</h1>
      {show && <MultipleCustomHooks />}
      <button
        className="btn btn-primary mt-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
    </div>
  );
};

export default RealExampleRef;
