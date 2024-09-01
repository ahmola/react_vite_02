import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App.jsx'
import BlogList from './components/BlogList.jsx'
import Login from './components/Login.jsx';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/login' element={<Login />} />
      <Route path='/blog' element={<BlogList />}/>
    </Routes>
  </Router>, 

);
