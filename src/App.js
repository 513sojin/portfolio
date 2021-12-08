
import React, { Component } from 'react'
import Navigation from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './Intro';
import {Global} from '@emotion/react';
import reset from './components/reset'

export default class App extends Component {
  render() {
    return (
      <>
        <Global styles={reset} />
        <Navigation/>
        <Intro/>
      </>
    )
  }
}