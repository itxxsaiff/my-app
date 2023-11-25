import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props){
  

    return(
        <nav className={`navbar navbar-expand-lg bg-${props.mode} px-4 py-3 ${props.mode === 'primary'?'':'border-bottom border-light'}`}>
  <div className="container-fluid">
    <Link className="navbar-brand text-white h1 fw-bold" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item"><Link className="nav-link text-white" aria-current="page" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link text-white" to="/about">{props.about}</Link></li>
      </ul>
      <div className="form-check form-switch me-3">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" name='theme'/>
  <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Green</label>
</div>
      <div className="form-check form-switch me-3">
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault" name='theme'/>
  <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
</div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
}

Navbar.propTypes = {
        title : PropTypes.string.isRequired,
        about : PropTypes.string
}

Navbar.defaultProps = {
  title : "Saif is learning ReactJs", 
  about : "About us"
}