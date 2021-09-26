//make a chairman meeting 
import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
   
    <div className="collapse navbar-collapse ms-auto "              id="navbarSupportedContent">
      <ul className="navbar-nav pe-5 mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/navlink">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/navlink">Next metting</a>
        </li>
        
     
      </ul>

    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;