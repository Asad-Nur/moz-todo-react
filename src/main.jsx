import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './AppFolder/App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App subject="Asad" />
  </StrictMode>,
)
