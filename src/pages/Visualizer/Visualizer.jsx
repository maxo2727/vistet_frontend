import React from "react";
import Card from "../../components/Card/Card.jsx";
import Button from "../../components/Button/Button.jsx";
import './Visualizer.css';

const Visualizer = () => {
    return (
        <div className="visualizer-wrapper">
            <Card>
                <div className="visualizer-header">
                    <div className="visualizer-title">
                        Tu outfit
                    </div>
                    <div className="visualizer-buttons">
                        <Button onClick={() => console.log('hola')} className={'accept-button'}>
                            Guardar
                        </Button>
                        <Button onClick={() => console.log('hola')} className={'cancel-button'}>
                            Cancelar
                        </Button>
                    </div>
                </div>
                <div className="visualizer-content"></div>
            </Card>
        </div>
    );
}

export default Visualizer;