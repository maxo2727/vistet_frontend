import React from "react";
import Card from "../Layout/Card/Card.jsx";
import './ClothingCard.css';

const ClothingCard = ({ clothingItem }) => {
    return (
        <div className="clothing-card-wrapper">
            <Card>
                <div className="clothing-card-content">
                    <div className="image-wrapper">
                        <div className="image-placeholder"></div>
                    </div>
                    <div className="content-wrapper">
                        {clothingItem}
                    </div>                    
                </div>
            </Card>
        </div>
    )
}

export default ClothingCard;