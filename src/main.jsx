import './utils/darkMode.js'
//Este archivo de JS que es la configuracion que tengo en el sistema operativo para que me detecte el color oscuro por defecto, siempre me debe de quedar en la parte de encima de todos los archivos..
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
