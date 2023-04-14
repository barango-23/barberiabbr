import React from 'react'
import ReactDOM from 'react-dom/client'
//importamos boostrap js y css//
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import { Home } from './Home/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Home/>
  </React.StrictMode>,
)
