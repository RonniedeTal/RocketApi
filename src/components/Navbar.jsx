import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div>
      <h5>NavBar</h5>
     <Link to="/">
      <button>Home</button>
     </Link> 
    </div>
  )
}

export default Navbar
