import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import TestPage from './TestPage.jsx'
import './index.css'

const pathname = window.location.pathname;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {pathname === '/test' ? <TestPage /> : <App />}
  </React.StrictMode>,
)
