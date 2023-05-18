import React from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { DarkModeContext } from '@/hooks/darkModeContext';

const Layout = styled.div`
    background-color: ${props => (
        props.darkMode ? "black" : "white"
    )};
    color: ${props => props.darkMode ? "white" : "black"};
`

export default props => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <Layout darkMode={darkMode}>
        {props.children}
    </Layout>
)}