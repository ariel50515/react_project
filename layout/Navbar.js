import React from 'react'
import { Link } from 'react-router-dom'
import LoginButton from '../components/LoginButton'

function Navbar() {
  return (
    <>
      <nav class="navbar bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Navbar</a>
          <Link to="about">關於我們</Link>
          <Link to="login">登入</Link>
          <LoginButton />
        </div>
      </nav>
    </>
  )
}

export default Navbar