/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import React from 'react';
import  Fade from 'react-reveal/Fade';

const content = css`
    @media (max-width: 768px) {
        padding: 25px;
        padding-left: 50px;
        span {
            font-size: 3rem;
        }
    }
    
    padding-left: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    span {
        font-size: 5rem;
        font-weight: 800;
        line-height: 7rem;
    }

    strong {
        background: #6495ED;
        background: -webkit-linear-gradient(20deg, #6495ED, #BA55D3);
        background:    -moz-linear-gradient(20deg, #6495ED, #BA55D3);
        -webkit-background-clip: text;
                background-clip: text;
        color: transparent;
    }
`;

  
const Home=()=>{
    return (
        <Fade left>
            <div css={content}>
                    <span>나, <strong>이소진</strong>은</span> <br/>
                    <span>책임감 있는😎</span> <br/>
                    <span>프론트엔드 <strong>개발자</strong>이다.</span>
            </div>
        </Fade>
    );
}

export default Home;