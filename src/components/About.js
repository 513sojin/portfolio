import React  from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import univ from '../image/univ.png'
import language from '../image/language.png'
import favor from '../image/favor.png'
import {
    Tooltip, OverlayTrigger
} from 'react-bootstrap';
import Fade from "react-reveal/Fade";

const About = () => {

    return (
      <div css={content}>
        <Fade bottom>
        <div style={{marginTop: '-10%', marginBottom: '3%'}}>
            <p css={titleStyle} >About</p>
            <p style={{fontWeight : 600, textAlign: 'center'}}>제가 누군지 궁금하지 않으신가요 ? 글자 위에 마우스를 올려주세요. </p>
        </div>
        </Fade>
        
        <div css={contentWrapper}>
          <div css={backgroundColor}></div>
          <div css={contentDiv}>
            <div css={float}>
              <img src={univ} css={imageStyle} alt='univ'/>
              <OverlayTrigger  placement="bottom"  delay={{ show: 500, hide: 300 }}  overlay={<Tooltip id="button-tooltip">숭실대학교 글로벌미디어학부 2학년 2학기까지 마친 상태입니다. 지금은 휴학생입니다 :)</Tooltip>}>
                <p>Univ</p>
              </OverlayTrigger>
            </div>

            <div css={float}>
              <img src={language} css={imageStyle} alt='language'/>
              <OverlayTrigger  placement="bottom"  delay={{ show: 500, hide: 300 }}  overlay={<Tooltip id="button-tooltip">React와 Flutter에 관심 있습니다. Flutter로 프로젝트를 진행했기에 가장 잘 사용하는 언어이지만, React도 그 수준에 도달하기 위해서 노력하고 있어요 !</Tooltip>}>
                <p>Language</p>
              </OverlayTrigger>
            </div>

            <div css={float} >
              <img src={favor} css={imageStyle} alt='favor'/>
              <OverlayTrigger  placement="bottom"  delay={{ show: 500, hide: 300 }}  overlay={<Tooltip id="button-tooltip">새로운 환경을 좋아하고, 다양한 사람들과 대화하는 것을 좋아해요. 실력있는 개발자들과 협업하면서 성장하는 것이 저의 목표입니다 !</Tooltip>}>
                <p>Favor</p>
              </OverlayTrigger>
            </div>

          </div>
        </div>
      </div>
    );
  };

export default About;

export const titleStyle= css`
    margin: 0;
    font-size: 4rem;
    font-weight: 700;
    text-align: center;

    @media (min-width: 768px) and (max-width: 991px) {
      font-size:3rem;
    }
      
    @media (max-width: 768px) {
      font-size:3rem;
    }
`;

export const content = css`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
  
export const contentWrapper = css`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: column;
  position: relative;
  
  `;

export  const contentDiv =css`
    width:85%;
    height: 100%;
    margin: 0 auto;
    display:flex;
    justify-content: space-evenly;
    z-index:3;
  `;

const backgroundColor=css`
  width: 100%;
  height: 20%;
  background:gray;
  position: absolute;
  z-index:2;
  top: 35%;
  background: #6495ED;
  background: -webkit-linear-gradient(40deg, #6495ED, #BA55D3);
  background:    -moz-linear-gradient(40deg, #6495ED, #BA55D3);
  `;

  const float=css`
    float: left;
    margin-top:2%;
    p{
      text-align: center;
      font-size: 2rem;
      font-weight: 400;
    }

    @media (max-width: 768px) {
      p{
        margin-top:10px;
        font-size:1.5rem;
        color:white;
        font-weight:500;
      }
    }
  `;

  const imageStyle=css`
  width:200px;
  height:200px;
  
  @media (min-width: 768px) and (max-width: 991px) {
    width:150px;
    height:150px;
  }
    
  @media (max-width: 768px) {
    width:100px;
    height:100px;
  }
  `;

  
