import React from "react";
import VisualizerComponent from "../../components/VisualizerComponent/VisualizerComponent.jsx";
import CatalogComponent from "../../components/CatalogComponent/CatalogComponent.jsx";
import './VisualizerPage.css';

const VisualizerPageHeader = () => {
    return (
        <div className="visualizer-page-header">
            Arma tu Outfit Perfecto
        </div>
    );
}

const VisualizerPageBody = () => {
    return (
        <div className="visualizer-page-cards-container">
            <VisualizerComponent />
            <CatalogComponent />
        </div>
    );
}

const VisualizerPage = () => {
    return (
            <div className="visualizer-page-wrapper">
                <VisualizerPageHeader />
                <VisualizerPageBody />    
            </div> 
    )
}

export default VisualizerPage;