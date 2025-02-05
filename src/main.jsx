import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ContactUs from './Contact'
import './style.css'
import 'animate.css'
import 'bootstrap/dist/css/bootstrap.min.css'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactUs />
  </StrictMode>,
)
