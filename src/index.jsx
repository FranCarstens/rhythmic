import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'

// eslint-disable-next-line react-refresh/only-export-components
const Design = lazy(() => import('./Design'))

const root = ReactDOM.createRoot(document.getElementById('root'))

let params = new URLSearchParams(document.location.search);
let debug = !!params.has("debug") // is the string "Jonathan"

root.render(
  <React.StrictMode>
    <App />
    {debug && <Design />}
  </React.StrictMode>
)
