import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/Css/HubStyles.css'; 

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
//colocar dentro de "BrowserRouter" a "HomeProvider" conteniendo a "App"