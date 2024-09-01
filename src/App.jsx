import { useState } from 'react'
import BlogList from './components/BlogList'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div className='App'>
        <h1>Welcome</h1>
        <Link to='/login'>Login</Link>
      </div>
    </>
  )
}

export default App