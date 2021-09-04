import React from "react";
import styled from "styled-components";
import { HamburgerMenu } from "../hamburgerMenu";

const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5em;
  background-color: white;
  padding-top: 3px;

  box-shadow: -2px 2px 2px rgba(15, 15, 15, 0.3);
`;

const CardoTitle = styled.div`
  border: 0;
  background: transparent;
  color: #DF711B;
  font-size: 20px;
  font-weight: 600;
  margin-top: 0px;

`;
const CardoImg = styled.div`
  margin-bottom: 0px;
  float:left;
  margin-right: 10px;
`;


export function Navbar(props) {
  return (
    <NavbarContainer>
      <CardoImg><img src="cc.svg"></img></CardoImg>
      <CardoTitle>CardoCodes</CardoTitle>
      <HamburgerMenu />
    </NavbarContainer>
  );
}
