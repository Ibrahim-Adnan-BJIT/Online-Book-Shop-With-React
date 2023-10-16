import { createContext, useEffect, useState } from "react";
import "./App.scss";
import ComponentOne from "./components/componentOne";
import axios from "axios";

export const MyContext = createContext("");
export const UserContext = createContext({});

function App() {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const handleIncrement = () => {
    setCounter((cnt) => cnt + 1);
  };

  const handleIncrementByTen = () => {
    setCounterTwo((cnt) => cnt + 10);
  };

  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((resp) => {
      console.log("Our Response is  ", resp);
      const data = resp.data;
      console.log("Our data ", data);
      console.log("Total items ", data.total);
      setUsersData(data.data);
    });

    console.log("The useEffect has been triggered");
  }, []);

  useEffect(() => {
    console.log("The UserData ", usersData);
  }, [usersData]);

  return (
    <div>
      <h3>Value: {counter}</h3>
      <button onClick={handleIncrement}>Increment</button>
      <h3>Value Increment by Ten: {counterTwo}</h3>
      <button onClick={handleIncrementByTen}>Increment By Ten</button>

      {/* Context API demo */}
      <MyContext.Provider value={{ counter, handleIncrement }}>
        <ComponentOne />
      </MyContext.Provider>
      <h1>The users Data</h1>

      {/* API calling */}
      {usersData[0] && <h2>First person name: {usersData[0].first_name}</h2>}
      {usersData.map((user) => {
        return (
          <div key={user.id} style={{ border: "1px solid" }}>
            <h4>FirstName: {user.first_name}</h4>
            <h4>LastName: {user.last_name}</h4>
            <img src={user.avatar} alt="pic" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
