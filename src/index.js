import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// adding bootstrap and font-awesome
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css'
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<Router>
      <App />
</Router>
  </React.StrictMode>,
)
