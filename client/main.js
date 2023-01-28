import React from 'react'
import { render } from 'react-dom'
import Test from './Test'

render(
    <React.StrictMode>
        <Test />
    </React.StrictMode>,
    document.getElementById('root')
)