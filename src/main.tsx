import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { LooktrendyApp } from './LooktrendyApp'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LooktrendyApp />

  </StrictMode>,
)
