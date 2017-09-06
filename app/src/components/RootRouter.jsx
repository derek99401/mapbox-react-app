/*
 * ./src/components/RootRouter.jsx
 */

import React, {Component} from 'react'
import {
  HashRouter,
  Route
} from 'react-router-dom';

import App from './App'
import BasicMap from './BasicMap'

function RootRouter() {
  return (
    <HashRouter>
       <div>
         <Route exact path="/" component={App} />
         <Route exact path="/map" component={BasicMap} />
       </div>
    </HashRouter>
  )
}

export default RootRouter
