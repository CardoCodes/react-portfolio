
import "./App.css";
import styled from "styled-components";
import { Navbar } from "./components/navbar";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FDE49C;
  color: #fff;
`;

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em;
`;

const SomeContent = styled.h2`
  color: #444;

`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <InnerContainer>
        <SomeContent>
          Hello my name is Cardo. Welcome to my Web Portfolio.</SomeContent>
      </InnerContainer>
    </AppContainer>
  );
}

export default App;
