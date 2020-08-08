import React from 'react';
import Home from './home';
import styled from "styled-components";
// import HomeImg from "./images/homeImage.jpg"
import HomeImg from "./images/new.jpg"

function App() {
  return (
    <StyledDiv>
      <Home />

    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
background-image: url(${HomeImg});
height: 100vh;


@media only screen and (max-width: 762px){
  background-image: url(${HomeImg});
  height: 100vh;
  margin-top: 0%;
} 


`;
