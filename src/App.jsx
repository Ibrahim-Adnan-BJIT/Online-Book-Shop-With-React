import { useState } from "react";
import "./App.css";
import Card from "./components/card.component";
import ComponentOne from "./components/componentOne";
import IncrementComponent from "./components/increment";
import { USER_DATA } from "./data/data";
import EventPropagation from "./components/evenPropagation";

function App() {
  //logical operations
  const titleApp = "This is from app";
  const [countVal, setCountVal] = useState(0);

  const handleIncrement = (val) => {
    setCountVal(countVal + val);
  };

  return (
    <>
      {/* event propagation demo */}
      <EventPropagation />
      {/* Callback function demo */}
      <h1>Passing data from child to parent</h1>
      <h3>Count Value from app: {countVal}</h3>
      <IncrementComponent
        countVal={countVal}
        handleIncrement={handleIncrement}
      />
      {/* Props drilling demo */}
      <h3>Props drilling demo:</h3>
      <ComponentOne title={titleApp} />
      <h1>Use of cards: </h1>
      {USER_DATA.map((user, index) => {
        console.log("the indexes:", index);

        return (
          <Card
            key={user.id}
            userId={user.id}
            title={user.title}
            body={user.body}
            tags={user.tags}
          />
        );
      })}
    </>
  );
}

export default App;
