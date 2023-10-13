import React from "react";

const IncrementComponent = ({ countVal, handleIncrement }) => {
  return (
    <div>
      {/* <h4>Value: {countVal}</h4> */}
      <div>Click button To increment value</div>
      <button onClick={() => handleIncrement(25)}>Click to increment</button>
    </div>
  );
};

export default IncrementComponent;
