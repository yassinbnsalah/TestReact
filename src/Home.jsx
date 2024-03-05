import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
  const [hideTitle , sethideTitle] = useState(false)
  return (
    <div>
     <h1 hidden={hideTitle}> Welcome to Our competitions </h1>
    </div>
  )
}

export default Home
