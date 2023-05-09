import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='header-content'>
            <div><h2>Green Shoping</h2> </div>
            <div className="ancor">
                <Link to="/">Shop</Link>
                <Link to="/orders">Order</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Header;