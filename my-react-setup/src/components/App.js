import React from 'react'
import styled from 'styled-components'
import ErrorBoundary from './error_boundary'

export default class App extends React.Component{
  render(){
    return(
      <ErrorBoundary>
      <h1>Hello React!</h1>
      </ErrorBoundary>
    )
  }
}