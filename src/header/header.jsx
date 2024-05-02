import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from './logo1.png';

function Header() {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        setIsActive(false);
    }, [location.pathname]);

    return (
        <div className='wrapper'>
          <header className={`header ${isActive ? 'active' : ''}`}>
            <div className='container'>
              <div className='header__body'>
                <Link to="/" className='header__logo'>
                  <img src={logo} alt="Logo"/>
                </Link>
                <div className={`header__burger ${isActive ? 'active' : ''}`} onClick={handleClick}>
                    <span></span>
                </div>
                <nav className={`header__menu ${isActive ? 'active' : ''}`}>
                    <ul className="header__list">
                        <li>
                            <Link to="/catalog" className={`header__link ${location.pathname === '/catalog' ? 'active' : ''}`}>Katalogs</Link>
                        </li>
                        <li>
                            <Link to="/info" className={`header__link ${location.pathname === '/info' ? 'active' : ''}`}>Par mums</Link>
                        </li>
                        <li>
                            <Link to="/banketi" className={`header__link ${location.pathname === '/banketi' ? 'active' : ''}`}>Banketi</Link>
                        </li>
                        <li>
                            <Link to="/team" className={`header__link ${location.pathname === '/team' ? 'active' : ''}`}>Pasūtījumi</Link>
                        </li>
                        <li>
                            <Link to="/links" className={`header__link ${location.pathname === '/links' ? 'active' : ''}`}>Lokācijas</Link>
                        </li>
                    </ul>
                </nav>
              </div>
            </div>
          </header>
        </div>
    );
}

export default Header;
