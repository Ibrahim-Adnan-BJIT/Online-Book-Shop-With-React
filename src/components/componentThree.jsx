import { useContext } from "react";
import { MyContext } from "../App";

const ComponentThree = () => {
  const { counter, handleIncrement } = useContext(MyContext);

  return (
    <div>
      <h3>The counter value from component three: {counter} </h3>
      <button onClick={handleIncrement}>Increase</button>
    </div>
  );
};

export default ComponentThree;
