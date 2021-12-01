
import React, { Component } from 'react'
import Navigation from './components/Navigation'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Intro';
export default class App extends Component {
  render() {
    return (
      <>
        <Navigation/>
        <Intro/>
      </>
    )
  }
}