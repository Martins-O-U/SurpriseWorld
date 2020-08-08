import React from 'react';
import Home from './home';
import styled from "styled-components";
import { Route } from "react-router-dom";
// import HomeImg from "./images/homeImage.jpg"
import HomeImg from "./images/new.jpg"
import Success from './success';
import Failed from './Failed';

function App() {
  return (
    <StyledDiv>
      <Route exact path="/" component={Home} />
      <Route path="/success" component={Success} />
      <Route path="/failed" component={Failed} />
    </StyledDiv>
  );
}

export default App;

const StyledDiv = styled.div`
background-image: url(${HomeImg});
height: 100vh;


@media only screen and (max-width: 778px){
  background-image: url(${HomeImg});
  height: 100vh;
  margin-top: 0%;
} 
`;
