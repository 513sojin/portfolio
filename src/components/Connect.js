import React from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import { content, contentDiv, contentWrapper, subtitleStyle, titleStyle } from './About';
import Fade from "react-reveal/Fade";
import github from '../image/github.png';
import velog from '../image/velog.png';
import { imgContianer } from './Project';
import Footer from './Footer';

const Connect=()=>{
    return (
        <>
        <div css={contentFooter}>
            <div style={{paddingBottom: '6rem'}}>
                <Fade bottom>
                <div style={{ marginBottom: '3%'}}>
                    <p css={titleStyle}>Connect</p>
                    <p css={subtitleStyle}>저의 더 많은 정보가 담긴 곳이 궁금하신가요 ?</p>
                </div>
                </Fade>
                <div css={connectWrapper}>
                    <div css={contentDiv}>
                        <div css={imgContianer}>
                            <a href={'https://github.com/513sojin'}>
                                <img src={github} css={image} alt='flume'/>
                            </a>
                            <p>Github</p>
                        </div>
                        <div css={imgContianer}>
                            <a href={'https://velog.io/@513sojin'}>
                                <img src={velog} css={image}/>
                            </a>
                            <p>Velog</p>
                        </div>
                    </div>
                </div>
            </div>    
            <Footer/>
        </div>
        
        </>
    );
}

const contentFooter=css`
height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
`;

const connectWrapper = css`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  position: relative;
  `;

const image=css`
width:200px;
height:200px;
@media (max-width: 768px) {
    width:130px;
    height:130px;
  }
`;

export default Connect;

