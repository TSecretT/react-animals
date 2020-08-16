import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

//https://alexwohlbruck.github.io/cat-facts/docs/

function RandomCatFact() {
  const [fact, setFact] = React.useState()

  React.useEffect(() => {
    fetch("https://cat-fact.herokuapp.com/facts")
    .then(response => {return response.json()})
    .then(data => {
      console.log(data)
      setFact(data.all[Math.floor(Math.random() * data.all.length)].text)
    })
  }, [])

  return(
    <MainContainer>
      <span>{fact? fact: "Loading"}</span>
    </MainContainer>
  )
}

export default RandomCatFact;
