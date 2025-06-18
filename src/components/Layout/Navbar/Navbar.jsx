import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '../Button/Button';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className='navbar-content-wrapper'>
                <div className='navbar-logo'>
                    VisteT
                </div>
                <div className='navbar-links'>
                    <Link to="/">Inicio</Link>
                    <Link to="/visualizer">Arma tu Outfit</Link>
                    <Link to="/my-outfits">Mis Outfits</Link>
                    <Link>Contacto</Link>
                </div>
                <div className='navbar-buttons'>
                    <Button className={'accept-button'}>
                        Iniciar sesión
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;