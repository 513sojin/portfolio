import React from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import { backgroundColor, content, contentDiv, contentWrapper, titleStyle} from './About';
import Fade from "react-reveal/Fade";
import flumeride from '../image/screenshot_flume.png'
import sojinpage from '../image/screenshot_sojin.png'

const Project=()=>{
    
    return (
        <>
        <div css={content}>
            <Fade bottom>
                <div style={{marginTop: '-10%', marginBottom: '3%'}}>
                    <p css={titleStyle}>Project</p>
                    <p style={{fontWeight : 600, textAlign: 'center'}}>여태 진행했던 프로젝트를 소개해보겠습니다. 사진을 클릭하시면 설명이 담긴 노션으로 이동합니다. </p>
                </div>
            </Fade>
            
            <div css={contentWrapper}>
                <div css={backgroundColor} style={{height:'35%'}}></div>
                <div css={contentDiv}>
                    <div css={imgContianer}>
                        <a href={'https://locrian-gateway-dba.notion.site/Flumeride-9f34e5033edd4902b59a87a226e262bf'}>
                            <img src={flumeride} width='540' height='350' alt='flume'/>
                        </a>
                        <p>Flumeride</p>
                    </div>
                    <div css={imgContianer}>
                        <a href={'https://locrian-gateway-dba.notion.site/Portfolio-a38851c615ef420b82b2e4c32b9ae72b'}>
                            <img src={sojinpage}  width='540' height='350' alt='sojin'/>
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