import './footer.css';
import twitter from './twitter2.png';
import facebook from './facebook1.png';
import insta from './insta1.png';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Footer() {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setIsActive(location.pathname === '/');
    }, [location.pathname]);

    return (
        <div className='foot__wrap'>
            <footer className={`footer ${isActive ? 'active': ''}`}>
                <div className='foot__container'>
                    <div className='row'>
                    <div className='foot__col'>
                        <h4>Informacija</h4>
                        <ul>
                            <li><a href='/info'>Par mums</a></li>
                            <li><a href='/catalog'>Katalogs</a></li>
                            <li><a href='/banketi'>Banketi</a></li>
                            <li><a href='/pasuitjumi'>Pasūtijumi</a></li>
                            <li><a href='/lokacijas'>Lokācijas</a></li>
                        </ul>
                    </div>
                    <div className='foot__col'>
                        <h4>Kontakti</h4>
                        <ul>
                            <li><a href='/info'>+371 22088333</a></li>
                            <li><a href='/info'>info@ciemakukulis.lv</a></li>
                        </ul>
                    </div>
                    <div className='foot__col'>
                        <h4>Sēko mums</h4>
                        <div className='social__links'>
                            <a href='https://www.instagram.com/ciemakukulis/'><img src={insta} alt="Instagram"/></a>
                            <a href='https://lv-lv.facebook.com/ciemakukulis/photos/'><img src={facebook} alt="Facebook"/></a>
                            <a href='https://twitter.com/ciemakukulis/status/533626493235380225'><img src={twitter} alt="Twitter"/></a>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;