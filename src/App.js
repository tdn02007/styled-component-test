import React, {Component} from 'react';
import styled, {createGlobalStyle, keyframes, css} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

class App extends Component{
  render(){
    return (
      <Container>
        <GlobalStyle whiteColor />
        <Button >Hello</Button>
        <Button danger rotationTime={5}>Hello</Button>
        <Button as="a" href="http://www.google.com">Go to google</Button>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #bdc3c7;
`;

const Button = styled.button`
  border-radius: 50px;
  padding: 5px;
  min-width: 120px;
  color: white;
  font-weight: 600;
  -webkit-appearance: none;
  cursor: pointer;
  &:active,
  &:focus{
    outline: none;
  }
  background-color: ${props => props.danger ? "red" : "greenyellow"};
  ${props => {
    if(props.danger){
      return css`animation: ${props.rotationTime}s ${rotation} linear infinite`;
    }
  }};
  text-decoration: none;
`;

const rotation = keyframes`
  from{
    transform: rotate(0deg);
  }
  to{
    transform: rotate(360deg);
  }
`;


export default App;
