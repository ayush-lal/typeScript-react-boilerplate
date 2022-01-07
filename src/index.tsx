import React from 'react'
import ReactDOM from 'react-dom'
import './assets/styles/index.scss'
import reportWebVitals from './reportWebVitals'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { Home, Page2 } from './pages'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/page2" element={<Page2 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
