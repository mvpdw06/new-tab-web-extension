import 'babel-polyfill'

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import style from './app.css'

const rootElement = document.getElementById('app')

const renderApp = () => {
  const App = require('./app')
  render(
    <AppContainer>
      <App />
    </AppContainer>,
    rootElement
  )
}

renderApp()

module.hot && module.hot.accept('./app.js', () => renderApp())
