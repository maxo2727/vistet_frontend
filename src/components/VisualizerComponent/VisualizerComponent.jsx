import React from "react";
import Card from "../Layout/Card/Card.jsx";
import Button from "../Layout/Button/Button.jsx";
import './VisualizerComponent.css';

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
                <div className="visualizer-item">
                    <img src="https://rehabclo.cl/cdn/shop/files/GORRO_COTELE1.png?v=1725042727&width=360" className="visualizer-item-img"></img>
                </div>
                <div className="visualizer-item">
                    <img src="https://rehabclo.cl/cdn/shop/files/HERITAGEFSFR.png?v=1724258199&width=360" className="visualizer-item-img"></img>
                </div>
                <div className="visualizer-item">
                    <img src="https://rehabclo.cl/cdn/shop/files/jortbkbl.png?v=1737654495&width=360" className="visualizer-item-img"></img>
                </div>
            </div>                         
        </div>
    );
}

const VisualizerComponent = () => {
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

export default VisualizerComponent;