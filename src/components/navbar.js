import {Link} from 'react-router-dom'
import React from "react";

function Navbar(){
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-2">
      <Link to="/" className="navbar-brand ml-5">navbar</Link>
      <Link to="/add" className="btn  text-white outline-light" style={{position:"absolute",right:"100px"}}>add Contact</Link>
    </nav>
  );
}

export default Navbar;
