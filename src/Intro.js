import React from 'react';
import Home from './components/Home';
import About from './components/About';
import styled from 'styled-components';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import Project from './components/Project';
import { Container } from 'react-bootstrap';
import Connect from './components/Connect';

export default function Intro(){
    return (
        <div>
            <div id="home">
                <Home/>
            </div>
            <div id="about" >
                <About/>
            </div>
            <div id="project" >
                <Project/>
            </div>
            <div id="connect">
                <Connect/>
            </div>
        </div>
        
    );
}