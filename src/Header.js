import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BsCart3,BsPersonCircle} from "react-icons/bs";
import { Link } from 'react-router-dom';
import 'popper.js';
import 'jquery'
import logo from './images/logo.png';
import { useCart } from 'react-use-cart';

const Header = () => {
  const {
    totalUniqueItems
} = useCart();
  return (
    <>
<nav className="navbar navbar-expand-lg bg-danger border-bottom border-dark sticky-top">
    <div className="container">
      <img src={logo} className="img-fluid navbar-brand" alt="..."/>
      <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse  " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3 ">
          <li className="nav-item ">
            <Link className="nav-link active text-white" to='/'>HOME</Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link text-white" to='/about'>ABOUT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/contact">CONTACT</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fs-6" to="/order"><BsCart3/>
              <sup className='border rounded-circle px-1 bg-dark'>{totalUniqueItems}</sup></Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white fs-6" to="/login"><BsPersonCircle /></Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Header