import React, { useState } from "react";
import axios from "axios";
import Card from "../Layout/Card/Card.jsx";
import Button from "../Layout/Button/Button.jsx";
import VisualizerCarousel from "../Layout/Carousel/Carousel.jsx";
import SaveOutfitModal from "../SaveOutfitModal/SaveOutfitModal.jsx";
import './VisualizerComponent.css';

const VisualizerComponent = ({ storeItems, selectedOutfit, onSelectOutfit }) => {
    const [isSaveOutfitModalOpen, setIsSaveOutfitModalOpen] = useState(false);

    const handleOpenSaveOutfitModal = () => {
        setIsSaveOutfitModalOpen(true);
    }

    return (
        <div className="visualizer-card-wrapper">
            <Card>
                <div className="visualizer-card-content-wraper">
                    <VisualizerHeader 
                        onSaveOutfit={handleOpenSaveOutfitModal}
                    />
                    <Visualizer 
                        storeItems={storeItems}
                        selectedOutfit={selectedOutfit}
                        onSelectOutfit={onSelectOutfit}
                    />
                    <SaveOutfitModal 
                        isOpen={isSaveOutfitModalOpen}
                        onClose={() => setIsSaveOutfitModalOpen(false)}
                        selectedOutfit={selectedOutfit}
                    />
                </div>
            </Card>
        </div>
    );
}

const VisualizerHeader = ({ onSaveOutfit  }) => {
    
    const handleSaveOutfit = () => {
        onSaveOutfit();
    }

    return (
        <div className="visualizer-card-header">
            <div className="visualizer-card-title">
                Tu outfit
            </div>
            <div className="visualizer-card-buttons">
                <Button onClick={handleSaveOutfit} className={'accept-button'}>
                    Guardar
                </Button>
                <Button onClick={() => console.log('cancelar')} className={'cancel-button'}>
                    Cancelar
                </Button>
            </div>
        </div>
    );
}

const Visualizer = ({ storeItems, selectedOutfit, onSelectOutfit }) => {

    const accessoryItems = storeItems.filter(item => item.type === 'ACCESSORIES');
    const shirtItems = storeItems.filter(item => item.type === 'POLERA');
    const pantItems = storeItems.filter(item => item.type === 'PANTS' || item.type === 'SHORTS');
    
    return (
        <div className="visualizer-wrapper">
            <div className='visualizer-column'>
                <VisualizerCarousel 
                    images={accessoryItems}
                    selectedItem={selectedOutfit["accesorio"]}
                    onSelectOutfit={onSelectOutfit}
                />
                <VisualizerCarousel 
                    images={shirtItems}
                    selectedItem={selectedOutfit["polera"]}
                    onSelectOutfit={onSelectOutfit}
                />
                <VisualizerCarousel 
                    images={pantItems}
                    selectedItem={selectedOutfit["pantalon"]}
                    onSelectOutfit={onSelectOutfit}
                />
            </div>                         
        </div>
    );
}

export default VisualizerComponent;