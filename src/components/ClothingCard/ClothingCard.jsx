import React from "react";
import Card from "../Layout/Card/Card.jsx";
import './ClothingCard.css';

const ClothingCard = ({ clothingItem, onSelectItem }) => {
    return (
        <div className="clothing-card-wrapper">
            <Card>
                <div className="clothing-card-content" onClick={() => onSelectItem(clothingItem, clothingItem.type)}>
                    <div className="image-wrapper">
                        <div className="image-content">
                            <img src={clothingItem.image_display_url} className="clothing-image" />
                        </div> 
                    </div>
                    <div className="text-wrapper">
                        {clothingItem.name}
                    </div>                    
                </div>
            </Card>
        </div>
    )
}

export default ClothingCard;