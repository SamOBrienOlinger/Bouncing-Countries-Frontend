import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../assets/bouncing-countries-logo.png';


const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/"> Welcome! </Link>
        </li>
        <li>
          <Link to="/searchcountry"> Clisk Here to Bounce a Country Off Us!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;




// import React from "react";
// import NavBar from "react-bootstrap/NavBar";
// import Nav from "react-bootstrap/NavBar";
// import logo from "../assets/bouncing-countries-logo.png";
// import styles from "../styles/NavBar.module.css";
// import { NavLink } from "react-router-dom";

