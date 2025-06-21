import React from "react";
import Card from "../Layout/Card/Card.jsx";
import './ClothingCard.css';

const ClothingCard = ({ clothingItem }) => {
    return (
        <div className="clothing-card-wrapper">
            <Card>
                <div className="clothing-card-content">
                    <div className="image-wrapper">
                        <img src="https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-white-t-shirt-mockup-hanging-realistic-t-shirt-png-image_9932970.png" alt={clothingItem} className="image-placeholder" />
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