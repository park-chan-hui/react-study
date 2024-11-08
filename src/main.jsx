import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const dom = document.getElementById('root') 
createRoot(dom).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
