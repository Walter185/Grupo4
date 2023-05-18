import React from 'react';

import { useContext } from "react";
import { DarkModeContext } from "../hooks/darkModeContext";

import styled from 'styled-components';



export default () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  const Button = styled.button`
    background : transparent;
    border : none;
    padding : 16px 24px;
    color : ${darkMode ? '#fff' : '#gggg'};
    border : .8px solid ${darkMode ? '#gggg' : '#000'};
    cursor : pointer;

    outline : none;
`;


  return (
    <Button onClick={toggleDarkMode}>
      Haga Click para: {darkMode ? "MODO CLARO" : "MODO OSCURO"}
    </Button>
  );
};