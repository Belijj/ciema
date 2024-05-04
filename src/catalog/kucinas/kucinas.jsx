import '../catalog.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Tort from './kucinas.jpeg'

function Kucinas() {
    const [activeLink, setActiveLink] = useState(null);

    return (
        <div className='catalog__wrap'>
            <div className="kat__wrapper">
                <div className="kat__menu">
                    <h1>Katalogs</h1>
                    <Link 
                        to="/tortes" 
                        className={activeLink === '/tortes' ? 'active' : ''}
                        onClick={() => setActiveLink('/tortes')}
                    >
                        Tortes
                    </Link>
                    <Link 
                        to="/maizites" 
                        className={activeLink === '/maizites' ? 'active' : ''}
                        onClick={() => setActiveLink('/maizites')}
                    >
                        Saldās un saļās maizītes
                    </Link>
                    <Link 
                        to="/piragi" 
                        className={activeLink === '/piragi' ? 'active' : ''}
                        onClick={() => setActiveLink('/piragi')}
                    >
                        Pirāgi
                    </Link>
                    <Link 
                        to="/cepumi" 
                        className={activeLink === '/cepumi' ? 'active' : ''}
                        onClick={() => setActiveLink('/cepumi')}
                    >
                        Cepumi
                    </Link>
                    <Link 
                        to="/kucinas" 
                        className={activeLink === '/kucinas' ? 'active' : ''}
                        onClick={() => setActiveLink('/kucinas')}
                    >
                        Kūciņas
                    </Link>
                </div>
            </div>
            <div className="grid__wrapper">
                <div className={`grid__menu ${activeLink === '/tortes' ? 'tortes-bg' : ''}`}>
                <div className="grid__elem"><img src={Tort}></img></div>
                    <div className="grid__elem"><img src={Tort}></img></div>
                    <div className="grid__elem"><img src={Tort}></img></div>
                    <div className="grid__elem"><img src={Tort}></img></div>
                    <div className="grid__elem"><img src={Tort}></img></div>
                    <div className="grid__elem"><img src={Tort}></img></div>
                    <div className="grid__elem"><img src={Tort}></img></div>
                    <div className="grid__elem"><img src={Tort}></img></div>
                    <div className="grid__elem"><img src={Tort}></img></div>
                </div>
            </div>
        </div>
    );
}

export default Kucinas;
