import React from 'react';
import Home from './components/Home';
import styled from 'styled-components';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
const Wrapper= styled.div`
    div{
        height: 100vh;
        width: 100vw;
    }
`;

const wrapper=css`
div{
    height: 100vh;
    width: 100vw;
}
`;

export default function Intro(){
    return (
        <div css={wrapper}>
            <div id="home">
                <Home/>
            </div>
            <div id="about" >
                <h2>About</h2>
                <p>content</p>
            </div>
            <div id="project" >
                <h2>Project</h2>
                <p>content</p>
            </div>
            <div id="connect">
                <h2>Connect</h2>
                <p>content</p>
            </div>
        </div>
        
    );
}