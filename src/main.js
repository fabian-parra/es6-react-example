import { render } from 'react-dom'
import React from 'react'
import App from './app'

render(<App url='/test/stubs/comment.json' refreshInterval='2000'/>, document.getElementById('AppContainer'))

