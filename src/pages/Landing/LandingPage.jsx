import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page-wrapper">
            <div className="landing-page-content">
                <h1>Bienvenido a VisteT</h1>
                <p>Explora nuestra colección de ropa y crea tus propios outfits.</p>
                {/* <button onClick={() => console.log('Iniciar sesión')}>Iniciar sesión</button>
                <button onClick={() => console.log('Registrarse')}>Registrarse</button> */}
            </div>
        </div>
    );
}

export default LandingPage;