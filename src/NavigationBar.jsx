import React from 'react'
import { Link } from 'react-router-dom'

function NavigationBar() {
  return (
    <div className='d-flex'>
      <Link to="/home"> Home </Link>
      <Link to="/Competitions"> Competitions </Link>
    </div>
  )
}

export default NavigationBar
