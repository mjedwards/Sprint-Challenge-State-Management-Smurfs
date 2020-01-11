import React from "react";
import "./App.css";
import Smurfs from "./Smurfs";
import Form from "./formComponents/Form";

const App = () => {
  // const state = [{ name: "Brainey", age: 200, height: "5cm", id: 0 }];
  return (
    <div className='App'>
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <div>Welcome to your state management version of Smurfs!</div>
      <div>Start inside of your `src/index.js` file!</div>
      <div>Have fun!</div>
      <Smurfs />
      {/* <Smurfs state={state} /> */}
      <Form />
    </div>
  );
};

export default App;
