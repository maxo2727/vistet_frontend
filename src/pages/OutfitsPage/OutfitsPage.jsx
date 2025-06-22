import React from 'react';
import './OutfitsPage.css';
import OutfitCard from '../../components/OutfitCard/OutfitCard.jsx';

const OutfitsPage = () => {
    return (
        <div className="outfits-page-wrapper">
            <div className="outfits-page-content">
                <h2>Mis Outfits</h2>
                <div className="outfits-cards-container">
                    <OutfitCard />
                    <OutfitCard />
                    <OutfitCard />
                    <OutfitCard />
                </div>
            </div>
        </div>
    );
}

export default OutfitsPage;