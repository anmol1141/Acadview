import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';



const Navbar = () => {

 

  return(
    <nav className='nav-wrapper blue darken-4'>
      <div className='container'>
        <Link to="/" className='brand-logo'>My brand</Link>
        <ul className='right'>
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/personal">Personal</NavLink></li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
