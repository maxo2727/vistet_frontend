import React from 'react';
import './OutfitCard.css';
import Card from '../Layout/Card/Card';

const OutfitCard = ({ outfitData, products }) => {
    return (
        <div className="outfit-card-wrapper">
            <Card>
                <div className="outfit-card-content-wrapper">
                    <div className="outfit-image-wrapper">
                        <div className="outfit-image-content">
                           <img src={products[0].image_display_url} className="outfit-image" /> 
                        </div>
                    </div>
                    <div className="outfit-text-wrapper">
                        <div className='outfit-text-content'>
                            <div className="outfit-title">{outfitData.name}</div>
                            <p>Id: {outfitData.id}</p>
                            <p>Rating: {outfitData.rating}</p>
                            <p>Prendas: {outfitData.components}</p>                            
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