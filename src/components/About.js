import React, {useState, useRef} from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import Icon from '../image/sojin2.jpeg'
import {
    Col, Row,
} from 'react-bootstrap';
const style=css`
display: inline-block;
width: 70%;
height: 300px;
margin: 0px 40px;
background-color: #4285f4;
`;


const About = () => {
    return (
      <div css={content}>
        <div data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <p css={pTag}><strong>이소진</strong>, 넌 누구니 ?</p>
            <p style={{fontWeight : 600, textAlign: 'center'}}>제가 누군지 궁금하시진 않은가요 ?</p>
        </div>
        <div css={cssDiv}>
          <Row css={cssRow}>
            <Col>
              <img src={ Icon } width='235' height='270' alt='Icon1' />
            </Col>
            <Col>
              <p><point>Birth</point> 2000년 5월 (만21세)</p>
              <p><point>Univ</point> 숭실대학교 글로벌미디어학부</p>
              <p>
                  <point>Language</point>
                </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  };

export default About;

const pTag= css`
    margin: 0;
    font-size: 3rem;
    font-weight: 900;
    text-align: center;
`;

const content = css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;


    strong { 
        background: #6495ED;
        background: -webkit-linear-gradient(20deg, #6495ED, #BA55D3);
        background:    -moz-linear-gradient(20deg, #6495ED, #BA55D3);
        -webkit-background-clip: text;
                background-clip: text;
        color: transparent;
    }
`;
  
  const cssDiv = css`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  background: gray;
  align-items: start;
  padding-top: 70px;
  `;
  
  const cssRow = css`
    flex: 0 0 60%;
    align-items: center;
    border: 1px solid black;
    point{
        font-weight: 800;
    }

    img{
        margin-left: 50px;
    }
    p{
        margin: 0;
        line-height: 3rem;
        font-size: 1.5rem;
    }
  `;
    
        