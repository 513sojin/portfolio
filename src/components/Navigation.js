import React from 'react';
/** @jsxImportSource @emotion/react */ 
import { css } from '@emotion/react'
import {
    Navbar,
    Container,
    Nav,
} from 'react-bootstrap';
import { Link } from "react-scroll"

function Navigation(){
    return (
        <>
        <Navbar fixed="top" color="white" light>
            <Container>
            <Navbar.Brand href="home"></Navbar.Brand>
            <Nav >
                <Nav.Link>
                    <Link to="home" spy={true}>
                        Home
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="about" spy={true}>
                        About
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="project" spy={true}>
                        Project
                    </Link>
                </Nav.Link>
                <Nav.Link>
                    <Link to="connect" spy={true}>
                        Connect
                    </Link>
                </Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </>
    );
}

export default Navigation