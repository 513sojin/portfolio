import React ,{ useState }from 'react';
import {
    Carousel
} from 'react-bootstrap';
import firstImage from '../image/sojinImage_2.jpeg'
import secondImage from '../image/sojinImage_4.jpeg'
import thirdImage from '../image/sojinImage_3.jpeg'
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'

const CustomCarousel=()=>{
    const [index, setIndex]=useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const carouselCss=css`
        width: 600px;
        height: 300px;
        img{
            object-fit:cover;
            width:600px;
            height: 300px;
        }
    `;

    return (
        <>
        <Carousel activeIndex={index} onSelect={handleSelect} css={carouselCss} >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={firstImage}
                alt="First slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={secondImage}
                alt="Second slide"
                />
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100"
                src={thirdImage}
                alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
        </>
    );
}

export default CustomCarousel;