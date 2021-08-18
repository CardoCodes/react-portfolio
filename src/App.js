
import "./App.css";
import styled from "styled-components";
import { Navbar } from "./components/navbar";
import HeroSection from "./components/heroSection"
import InfoSection from "./components/infoSection";
import { HomeObjOne } from "./components/infoSection/data";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
`;


function App() {
  return (
    <AppContainer>
      <Navbar />
      <HeroSection/>
    </AppContainer>
    
    
  );
}

export default App;
