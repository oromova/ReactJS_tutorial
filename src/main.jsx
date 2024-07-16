import React from 'react'
import ReactDOM from 'react-dom/client'
import SayHello from './SayHello.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SayHello name="Yulduz"/>
  </React.StrictMode>,
)
