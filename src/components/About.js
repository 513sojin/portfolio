import React, {useState, useRef} from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import univ from '../image/univ.png'
import language from '../image/language.png'
import favor from '../image/favor.png'
import styled from '@emotion/styled'
import {
    Col, Row, Tooltip, OverlayTrigger
} from 'react-bootstrap';


const About = () => {
    const renderTooltip = (props) => ( //props가 뭘 전달하는지 알기 
      <Tooltip id="button-tooltip" {...props}>
        숭실대학교 글로벌미디어학부 <br/>휴학생입니다 ! 현재 2학년 2학기까지 마친 상태입니다.
      </Tooltip>
    );

    const renderTooltipSecond =(props)=>{
      <Tooltip id="button-tooltips" {...props}>
        React와 flutter에 관심이 있습니다. React의 상태관리 라이브러리나, 스타일링 라이브러리에 대해 알고있기는 하지만 자유롭게 사용하기 위해서 노력 중입니다.
      </Tooltip>
    };

    const renderTooltipThird =(props)=>{
      <Tooltip id="button-tooltipss" {...props}>
        새로운 환경, 새로운 사람들과 만나는 것을 좋아합니다. 사람들과 협업하여 문제를 해결하고 더 성장하고 싶습니다.
      </Tooltip>
    };

    return (
      <div css={content}>
        <div>
            <p css={pTag}>이소진, 넌 누구니 ?</p>
            <p style={{fontWeight : 600, textAlign: 'center'}}>제가 누군지 궁금하지 않으신가요 ?</p>
        </div>
        <div css={cssDiv}>
           <div css={divWrapper}>

              <div css={divContainer}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 500, hide: 300 }}
                overlay={renderTooltip}
              >
                <div css={firstDiv} style={{width:'220px' , height:'220px'}}>
                  <img src={univ} alt='univ' css={imgStyle}/>
                  <div style={{position: 'relative', paddingBottom:'10px', fontSize: '2rem', color:'white', fontWeight: '800'}}>Univ</div>
                </div>
                </OverlayTrigger>
              </div>
              
              <div css={divContainer}>
                <OverlayTrigger
                placement="bottom"
                delay={{ show: 500, hide: 300 }}
                overlay={renderTooltip}
              >
                <div css={secondDiv} style={{width:'220px' , height:'220px'}}>
                  <img src={language} alt='language' css={imgStyle}/>
                  <div style={{position: 'relative', paddingBottom:'10px', fontSize: '2rem', color:'white', fontWeight: '800'}}>Language</div>
                </div>
                </OverlayTrigger>
              </div >
              
              <div css={divContainer}>
              <OverlayTrigger
                placement="bottom"
                delay={{ show: 500, hide: 300 }}
                overlay={renderTooltip}
              >
                <div css={secondDiv} style={{width:'220px' , height:'220px'}}>
                  <img src={favor} alt='favor' css={imgStyle}/>
                  <div style={{position: 'relative', paddingBottom:'10px', fontSize: '2rem', color:'white', fontWeight: '800'}}>Favor</div>
                </div>
                </OverlayTrigger>
              </div>

            </div>
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
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;
    
  const divWrapper =css`
  width :90%;
  height:80%;
  `;

  const divContainer=css`
    float: left;
    width: 30%;
    height: 100%;
    margin: 0 15px;
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  `;

  const firstDiv=css`
  background: -webkit-linear-gradient(20deg, #BA55D3, #6495ED);
  background:    -moz-linear-gradient(20deg, #BA55D3,#6495ED);
  width: 220px;
  height: 220px;
  `;
  const secondDiv=css`
  background: -webkit-linear-gradient(40deg, #6495ED, #BA55D3);
  background:    -moz-linear-gradient(40deg, #6495ED, #BA55D3);
  `;



  const imgStyle=css`
  position: relative;
  z-index: 1;
  top: -50px;
  left: -70px;
  width:180px;
  height:180px;
  `;
        

  //  <Row css={cssRow}>
  //           <Col>
  //             <img src={ Icon } width='235' height='270' alt='Icon1' />
  //           </Col>
  //           <Col>
  //             <p><point>Birth</point> 2000년 5월 (만21세)</p>
  //             <p><point>Univ</point> 숭실대학교 글로벌미디어학부</p>
  //             <p>
  //                 <point>Language</point>
  //               </p>
  //           </Col>
  //         </Row> 