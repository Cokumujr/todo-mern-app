import React from 'react';
import { jwtDecode } from 'jwt-decode';

const Navbar = ({ token }) => {
  const user = jwtDecode(token)
  console.log(user.user)
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-white">
  <div className="container-fluid">
    <a className="navbar-brand text-white" href="/">Todo App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <a className="nav-link text-white" href="/shopping-list">Shopping List</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <h3>Hello, {user.user.username}</h3>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar