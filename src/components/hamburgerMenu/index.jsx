
import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { MenuToggle } from "./menuToggle";
import { NavMenu } from "./navMenu";

const HamburgerMenuContainer = styled.div`
  display: flex;
`;


const MenuContainer = styled(motion.div)`
  min-width: 300px;
  width: 100%;
  max-width: 44%;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0 2px rgba(15, 15, 15, 0.3);
  z-index: 90;
  position: fixed;
  top: 0;
  right: 0;
  transform: translateX(4em);
  user-select: none;
  padding: 1em 2.5em;
`;

const TopContainer = styled.div`
  display: flex;
  width: 100%;
`;

const CardoIcon = styled.div`
  size: 20px;
  padding-right: 5px;
`;

const CardoTitle = styled(motion.button)`
  border: 0;
  background: transparent;
  color: #444;
  font-size: 20px;
  font-weight: 900;
  transition: all 250ms ease-in-out;
  padding: 10px 10px;

  &:focus {
    outline: none;
  }

  &:not(:last-of-type) {
    border-right: 1px solid #b4b4b4;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const menuVariants = {
  open: {
    transform: "translateX(3%)",
  },
  closed: {
    transform: "translateX(103%)",
  },
};

const menuTransition = {
  type: "spring",
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

export function HamburgerMenu(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
        transition={menuTransition}
      >
        <TopContainer>
        </TopContainer>
        <ContentContainer>
          <NavMenu isOpen={isOpen} />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
}
