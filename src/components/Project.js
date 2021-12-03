import React ,{ useState }from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import {
    Carousel
} from 'react-bootstrap';
const secondDiv=css`
  background: -webkit-linear-gradient(40deg, #6495ED, #BA55D3);
  background:    -moz-linear-gradient(40deg, #6495ED, #BA55D3);
  `;

const Project=()=>{
    
    return (
        <>
        <div style={{float: 'left' , widht:'100vh', height:'100vw', marginLeft:'150px'}}>
        <div css={secondDiv} style={{width:'220px' , height:'220px'}}></div>
        <div style={{fontSize: '7rem'}}>📚</div>
        <div style={{fontSize: '7rem'}}>🧸</div>
        </div>
       
        </>
    );
}

export default Project;