import React from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import { content, contentWrapper, titleStyle} from './About';
import Fade from "react-reveal/Fade";
import flumeride from '../image/screenshot_flume.png'
import sojinpage from '../image/screenshot_sojin.png'
import flumerideLogo from '../image/flumerideLogo.png'
import sojinEmoji from '../image/sojinEmoji.png'

const Project=()=>{
    
    return (
        <>
        <div css={content}>
            <Fade bottom>
                <div style={{marginTop: '-10%', marginBottom: '3%'}}>
                    <p css={titleStyle}>Project</p>
                    <p style={{fontWeight : 600, textAlign: 'center'}}>사진을 클릭하시면 설명이 담긴 노션으로 이동합니다. </p>
                </div>
            </Fade>
            
            <div css={contentWrapper}>
                <div css={backgroundColor}></div>
                <div css={contentStyle}>
                    <div css={imgContianer}>
                        <a href={'https://locrian-gateway-dba.notion.site/Flumeride-9f34e5033edd4902b59a87a226e262bf'}>
                            <div css={imageFlumeride}></div>
                        </a>
                        <p>Flumeride</p>
                    </div>
                    <div css={imgContianer}>
                        <a href={'https://locrian-gateway-dba.notion.site/Portfolio-a38851c615ef420b82b2e4c32b9ae72b'}>
                            <div css={imageSojin}></div>
                        </a>
                        <p>Portfolio</p>
                    </div>

                </div>
                
            </div>
        </div>
        </>
    );
}

export default Project;

export const imgContianer=css`
float: left;
text-align:center;

transform: scale(1.0);
transition: .5s;
p{
    font-size:2rem;
    font-weight: 900;
}
&:hover {
    transform:scale(1.1);
    transition:.5s;
  }

`;

const backgroundColor=css`
width: 100%;
height: 35%;
position: absolute;
z-index:2;
background: #6495ED;
background: -webkit-linear-gradient(40deg, #6495ED, #BA55D3);
background:    -moz-linear-gradient(40deg, #6495ED, #BA55D3);
top:35%;
@media (max-width: 768px) {
    height: 0%;
  }
`;

const contentStyle=css`
width:85%;
height: 100%;
margin: 0 auto;
display:flex;
justify-content: space-between;
z-index:3;
    
  @media (max-width: 768px) {
    justify-content: space-evenly;
  }

`;

const imageFlumeride=css`
width: 600px;
height:350px;
background-image: url(${flumeride});
background-repeat: no-repeat;
background-size: contain;
    
  @media (max-width: 768px) {
    background-image: url(${flumerideLogo});
    background-size: 150px;
    width:100%;
    height:50%;
  }
`;

const imageSojin=css`
width: 600px;
height:350px;
background-image: url(${sojinpage});
background-repeat: no-repeat;
background-size: contain;

  @media (max-width: 768px) {
    background-image: url(${sojinEmoji});
    background-size: 150px;
    width:100%;
    height:50%;
  }

`;