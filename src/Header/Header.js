import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

const MainContainer = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.div``;

function Header(props) {
  return (
    <MainContainer>
      <Link to="/">Home</Link>
      <Link to="/randomCat">Cat Picture</Link>
      <Link to="/randomCatFact">Cat Fact</Link>
      <Link to="/randomDog"> Dog Picture</Link>
    </MainContainer>
  );
}

export default Header;
