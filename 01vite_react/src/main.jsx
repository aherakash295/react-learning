import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'

// const reactEle = React.createElement('a', {
//   href:'https://google.com',
//   target:'blank'
// }, 'click me' );

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <App/>
  </StrictMode>,
)
