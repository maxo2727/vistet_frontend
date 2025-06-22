import React from 'react';
import './OutfitCard.css';
import Card from '../Layout/Card/Card';

const OutfitCard = () => {
    return (
        <div className="outfit-card-wrapper">
            <Card>
                <div className="outfit-card-content-wrapper">
                    <div className="outfit-image-wrapper">
                        <div className="outfit-image-content">
                           <img src="https://rehabclo.cl/cdn/shop/files/GORRO_COTELE1.png?v=1725042727&width=360" className="outfit-image" /> 
                        </div>
                    </div>
                    <div className="outfit-text-wrapper">
                        <div className='outfit-text-content'>
                            <div className="outfit-title">Outfit Title</div>
                            <p>Outfit text</p>
                            <p>Outfit text</p>
                            <p>Outfit text</p>                            
                        </div>
                    </div>
                    <div className="outfit-buttons-wrapper">
                        botón
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default OutfitCard;