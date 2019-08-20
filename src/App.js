import React, {Component} from 'react';
import styled, {createGlobalStyle, keyframes, css, ThemeProvider} from "styled-components";
import theme from "./theme";

const GlobalStyle = createGlobalStyle`
  body{
    padding:0;
    margin:0;
  }
`;

const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Input = styled.input.attrs({
  required: true
})`
  border: none;
  ${awesomeCard};
`;

const Card = styled.div`
  background-color: ${props => props.theme.successColor};
`;

class App extends Component{
  render(){
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyle whiteColor />
          <Input placeholder="hello"/>
          <Button >Hello</Button>
          <Button danger rotationTime={5}>Hello</Button>
          <Button as="a" href="http://www.google.com">Go to google</Button>
          <Form />
        </Container>
      </ThemeProvider>
    );
  }
}

const Form = () => (<Card><Button>Hello</Button></Card>)

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
