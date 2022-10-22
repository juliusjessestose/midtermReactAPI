import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (

      <nav className="navbar navbar-expand-lg elavation-3 bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#" style={{
            fontSize:"15px",
            fontWeight:"bold",
            color:"white",
          }}>Mater Dei College</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-0 mb-lg-0">
              <li className="nav-item">
                <strong><Link className="nav-link text-light" to="/">Dashboard</Link></strong>
              </li>
              <li className="nav-item">
                <strong><Link className="nav-link text-light" to="/venues">Venues</Link></strong>
              </li>
              
          </ul>
          </div>
        </div>
      </nav>
    );
}
 
export default Navbar;