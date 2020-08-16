import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 100%;
`;

// https://docs.thecatapi.com/

function RandomDogImage(props) {
  const [dogImageUrl, setDogImageUrl] = React.useState(null);

  React.useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
          console.log(data)
        setDogImageUrl(data.message);
      });
  }, []);

  if (dogImageUrl == null) return <div> Loading </div>;

  return (
    <MainContainer>
      <Image src={dogImageUrl} />
    </MainContainer>
  );
}

export default RandomDogImage;
