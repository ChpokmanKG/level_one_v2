import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function Header() {
  return (
    <header>
      <div className="container all-center">
        <Link to="/"><h2>Chpokman App</h2></Link>
      </div>
    </header>
  )
}

export default Header;