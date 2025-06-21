import React from "react";
import Card from "../Layout/Card/Card.jsx";
import './ClothingCard.css';

const ClothingCard = ({ clothingItem }) => {
    return (
        <div className="clothing-card-wrapper">
            <Card>
                <div className="clothing-card-content">
                    <div className="image-wrapper">
                        <img src={clothingItem.image} className="image-placeholder" />
                    </div>
                    <div className="content-wrapper">
                        {clothingItem.name}
                    </div>                    
                </div>
            </Card>
        </div>
    )
}

export default ClothingCard;