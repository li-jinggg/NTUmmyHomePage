import React from 'react'
import ReactDOM from 'react-[#1B2D4F]-dom/client'
import App from './App.tsx'
import TestPage from './TestPage.jsx'
import './index.css'

const isTestRoute = window.location.pathname === '/test';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isTestRoute ? <TestPage /> : <App />}
  </React.StrictMode>,
)
  createRoot(document.getElementById("root")!).render(
    <BrowserRouter> {/* 2. Wrap App inside BrowserRouter */}
    <App />
  </BrowserRouter>
);
  
