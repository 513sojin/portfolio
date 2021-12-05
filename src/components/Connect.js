import React from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import { content, contentDiv, contentWrapper, titleStyle } from './About';
import Fade from "react-reveal/Fade";
import github from '../image/github.png';
import velog from '../image/velog.png';
import { imgContianer } from './Project';

const Connect=()=>{
    return (
        <>
        <div css={content}>
        <Fade bottom>
        <div style={{marginTop: '-10%', marginBottom: '3%'}}>
            <p css={titleStyle}>Connect</p>
            <p style={{fontWeight : 600, textAlign: 'center'}}>저의 더 많은 정보가 담긴 곳이 궁금하신가요 ?</p>
        </div>
        </Fade>
        <div css={contentWrapper}>
            <div css={contentDiv}>
                <div css={imgContianer}>
                    <img src={github} width='200' height='200'/>
                    <p>Github</p>
                </div>
                <div css={imgContianer}>
                    <img src={velog}/>
                    <p>Velog</p>
                </div>
            </div>
            
        </div>

      </div>
        </>
    );
}

export default Connect;

