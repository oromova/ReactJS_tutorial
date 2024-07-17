import React from 'react'
import ReactDOM from 'react-dom/client'

import Hooks from "./Hooks"
import Class from './Class'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{display: 'flex'}}>
      <Class style={{flex: 1}}/>
      <Hooks style={{flex: 1}}/>
    </div>
  </React.StrictMode>
)
