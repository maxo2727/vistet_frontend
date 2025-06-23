import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Button from '../Button/Button';
import { useUser } from '../../../context/UserContext.jsx';

const Navbar = () => {
    const user = useUser();
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
                    <Link to="/contact">Contacto</Link>
                </div>
                <div className='navbar-buttons'>
                    {user ? (  
                        <div>
                            Bienvenido {user.name}!
                        </div>
                    ) : (
                        <Button className={'accept-button'}>
                            Iniciar sesión
                        </Button>
                    )}
                    
                </div>
            </div>
        </nav>
    )
}

export default Navbar;