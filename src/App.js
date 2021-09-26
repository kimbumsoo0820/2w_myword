import React from "react";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

//

import Home from "./Home";
import Add from "./Add";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#fff", display: "flex" }}>
      <Container>
        <Title>My Dictionary</Title>
        <Switch>
          <Route path="/" exact render={(props) => <Home></Home>}></Route>
          <Route path="/add">
            <Add></Add>
          </Route>
        </Switch>
      </Container>
    </div>
  );
}

const Container = styled.div`
  width: 90%;
  height: 80vh;
  margin: auto;
  margin-top: 4%;
  background-color: #fff;
  padding: 16px;
  border-radius: 50px;
  border: 1px solid #ddd;
  overflow: auto;

  justify-content: center;
  display: flex;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
  margin: auto;
  margin-bottom: 40px;
  margin-top: -16px;
  position: fixed;
  /* background-color: rgba(255, 255, 255, 0.8);  */
  background-color: white;
  width: 53em;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
