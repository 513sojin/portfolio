import React from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'

const Footer =()=>{
    return (
        <div css={footer}>
            <p style={{ fontSize: "14px", color: 'white'}}>
                Copyright 이소진. all rights reserved.
                <br />
                <strong>513sojin@gmail.com</strong>
            </p>
        </div>
    );
}

export default Footer;

const footer=css`
padding-top: 1.5%;
padding-right: 1%;
text-align: right;
position: absolute;
bottom: 0;
background: gray;
width: 100%;
height: 6rem;  
background: #6495ED;
        background: -webkit-linear-gradient(20deg, #6495ED, #BA55D3);
        background:    -moz-linear-gradient(20deg, #6495ED, #BA55D3);
`;