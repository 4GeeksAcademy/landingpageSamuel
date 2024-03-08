import React from "react";
import PropTypes from "prop-types"
const NavBar = (props) => {
    return(
        <nav className="nav navbar bg-secondary">
            <div className="container">
                <a className="navbar-brand" href="#">
                <img src="https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" alt="Bootstrap" width="30" height="24"/>
                Bootstrap
                 </a>
                 
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Abaut</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="#">Service</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light">Contact</a>
        </li>
      </ul>
    </div>
            
            
        </nav>
    )
}
export default NavBar;