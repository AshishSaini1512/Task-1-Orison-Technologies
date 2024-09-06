import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';  
import './Navbar.css';
import logo from '../assets/logo.png';
import cart_logo from '../assets/cart_icon.png';

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>Shopify</p>
        </div>
        <ul className="nav-menu">
            <li onClick={() => setMenu("shop")}><Link to='/'>Shop</Link>{menu === "shop" ? <hr/> : null}</li>
            <li onClick={() => setMenu("mens")}><Link to='/mens'>Mens</Link>{menu === "mens" ? <hr/> : null}</li>
            <li onClick={() => setMenu("womens")}><Link to='/womens'>Womens</Link>{menu === "womens" ? <hr/> : null}</li>
            <li onClick={() => setMenu("kids")}><Link to='/kids'>Kids</Link>{menu === "kids" ? <hr/> : null}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_logo} alt="cart" />
            <div className="nav-cart-count"></div>
        </div>
        <Outlet />
    </div>
  )
}