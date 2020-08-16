import React from "react";
import styled from "styled-components";
import { Router } from "@reach/router";
import Header from "./Header/Header";
import HomePage from "./HomePage";
import RandomCatImage from "./Cats/RandomCatImage";
import RandomCatFact from "./Cats/RandomCatFact";
import RandomDogImage from "./Dogs/RandomDogImage";
import "./App.css";

const MainContainer = styled.div`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  display: flex;
`;

function App() {
  return (
    <MainContainer>
      <Header />
      <Router>
        <HomePage path="/" />
        <RandomCatImage path="/randomCat" />
        <RandomCatFact path='randomCatFact' />
        <RandomDogImage path="/randomDog" />
        <RandomDogImage path="/randomDog" />
      </Router>
    </MainContainer>
  );
}

export default App;
