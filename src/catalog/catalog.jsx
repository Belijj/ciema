import './catalog.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PiragiImage from './piragi.jpeg';
import TortesImage from './tort.jpeg';
import KucinasImage from './kucinas.jpeg';
import MaizitesImage from './maizites.jpeg';
import CepumiImage from './cepumi.jpeg';

function Catalog() {
    const [activeLink, setActiveLink] = useState('/tortes');

    const linkCheck = () => {
        if (activeLink === '/tortes') {
            return TortesImage;
        } else if (activeLink === '/maizites') {
            return MaizitesImage;   
        } else if (activeLink === '/piragi') {
            return PiragiImage;
        } else if (activeLink === '/cepumi') {
            return CepumiImage;
        } else if (activeLink === '/kucinas') {
            return KucinasImage;
        } else if (activeLink === '/catalog') {
            return TortesImage;}

    };

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

            <div className="products">
                <div className="productElem"><img src={linkCheck()}></img></div>
                <div className="productElem"><img src={linkCheck()}></img></div>
                <div className="productElem"><img src={linkCheck()}></img></div>
                <div className="productElem"><img src={linkCheck()}></img></div>
                <div className="productElem"><img src={linkCheck()}></img></div>
                <div className="productElem"><img src={linkCheck()}></img></div>
                <div className="productElem"><img src={linkCheck()}></img></div>
                <div className="productElem"><img src={linkCheck()}></img></div>
                <div className="productElem"><img src={linkCheck()}></img></div>
                


            </div>

        </div>
    );
}

export default Catalog;
