import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.tsx'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
