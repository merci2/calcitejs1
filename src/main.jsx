import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { defineCustomElements } from '@esri/calcite-components/dist/loader'

defineCustomElements(window, { 
  resourcesUrl: 'https://js.arcgis.com/calcite-components/2.13.2/assets' 
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
