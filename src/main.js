import { render } from 'react-dom'
import React from 'react'
import App from './app'

render(<App url='http://localhost:4001/comments' refreshInterval='2000'/>, document.getElementById('AppContainer'))

