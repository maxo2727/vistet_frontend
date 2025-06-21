import React, { useState } from "react";
import Card from "../Layout/Card/Card.jsx";
import Button from "../Layout/Button/Button.jsx";
import VisualizerCarousel from "../Layout/Carousel/Carousel.jsx";
import './VisualizerComponent.css';
import storeItems from "../../data/StoreItemsDummy.jsx";

const VisualizerComponent = ({ storeItems }) => {
    return (
        <div className="visualizer-card-wrapper">
            <Card>
                <div className="visualizer-card-content-wraper">
                    <VisualizerHeader />
                    <Visualizer />
                </div>
            </Card>
        </div>
    );
}

const VisualizerHeader = () => {
    return (
        <div className="visualizer-card-header">
            <div className="visualizer-card-title">
                Tu outfit
            </div>
            <div className="visualizer-card-buttons">
                <Button onClick={() => console.log('hola')} className={'accept-button'}>
                    Guardar
                </Button>
                <Button onClick={() => console.log('hola')} className={'cancel-button'}>
                    Cancelar
                </Button>
            </div>
        </div>
    );
}

const Visualizer = () => {
    return (
        <div className="visualizer-wrapper">
            <div className='visualizer-column'>
                <VisualizerCarousel images={storeItems} />
                <VisualizerCarousel images={storeItems} />
                <VisualizerCarousel images={storeItems} />
            </div>                         
        </div>
    );
}

export default VisualizerComponent;