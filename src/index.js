import React from 'react'
import ReactDOM from 'react-dom'
import App from 'components/App'
import * as theme from 'theme'
import 'glamor/reset'

require('object.entries').shim()
theme.setup()

ReactDOM.render(<App />, document.getElementById('root'))
