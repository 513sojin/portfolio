/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import React from 'react';
import emoji1 from '../image/emoji1.png';
import emoji2 from '../image/emoji2.png';
import emoji3 from '../image/emoji3.png';
import emoji4 from '../image/emoji4.png';

const Home=()=>{
    return (
            <div css={content}>
                    <p>나, <strong>이소진</strong>은</p>
                    <p css ={rotateContianer}>
                        <span>
                            매일 성장하고 싶은 <img src={ emoji1 } css={firstAndThirdImage} alt='Icon1' /><br/>
                            욕심이 가득한 <img src={ emoji3 } css={secondImage} alt='Icon3' /><br/>
                            책임감이 있는 <img src={ emoji2 } css={firstAndThirdImage} alt='Icon4' /><br/>
                            소통을 중요시하는 <img src={ emoji4 } css={fourthImage} alt='Icon4' /><br/>
                        </span>
                    </p>
                    <p>프론트엔드 <strong>개발자</strong>이다.</p>
            </div>   
    );
}
export default Home;

const content = css`
height: 100vh;
width: 100vw;

padding-left: 150px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;

p {
    font-weight: 800;
    font-size: 5rem;
    line-height: 7rem;
    font-family: AppleBold;
}

strong { 
    background: #6495ED;
    background: -webkit-linear-gradient(20deg, #6495ED, #BA55D3);
    background:    -moz-linear-gradient(20deg, #6495ED, #BA55D3);
    -webkit-background-clip: text;
            background-clip: text;
    color: transparent;
    font-family: AppleBold;
}

@media (min-width: 768px) and (max-width: 991px) {
    padding-left: 50px;
    p{
        font-weight: 800;
        font-size: 4rem;
        line-height: 6rem;
        font-family: AppleBold;
    }
}
    
@media (max-width: 768px) {
    padding-left: 25px;
    p{
        font-weight: 800;
        font-size: 3rem;
        line-height: 5rem;
        font-family: AppleBold;
    }
}

`;

const rotateContianer= css`
    height: 7rem;
    overflow: hidden;
    position: relative;

    img {
        margin-bottom: 10px;
    }
    span{
        display: inline-block;
        white-space: nowrap;
        top: 0;
        left: 0;
        animation-name: move;
        animation-duration: 8s;
        animation-iteration-count: infinite;

        @keyframes move {
            0%{
                -webkit-transform: translateY(0);
                transform: translateY(0);
              }
              20%{
                -webkit-transform: translateY(-25%);
                transform: translateY(-25%);
              }
              40%{
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
              }
              60%{
                -webkit-transform: translateY(-75%);
                transform: translateY(-75%);
              }
          }
    }

    @media (min-width: 768px) and (max-width: 991px) {
        height: 6rem;
    }
        
    @media (max-width: 768px) {
        height: 5rem;
    }

`;

const firstAndThirdImage=css`
width:80px;
height:80px;
@media (max-width: 768px) {
    width:65px;
    height:65px;
}
`;
const secondImage =css`
width:85px;
height:85px;
@media (max-width: 768px) {
    width:70px;
    height:70px;
}
`;
const fourthImage=css`
width:95px;
height:95px;
@media (max-width: 768px) {
    width:80px;
    height:80px;
}
`;