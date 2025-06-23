import React, { useState } from 'react';
import "./Carousel.css";
import Spinner from '../Spinner/Spinner';

const VisualizerCarousel = ({ images }) => {
    const [index, setIndex] = useState(0);

    if (!images || images.length === 0) {
        return (
            <div className="visualizer-item">
                <Spinner />
            </div>
        )
    }
    
    const prev = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };
    const next = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="visualizer-item">
            <button onClick={prev} className="visualizer-button">{"<"}</button>
            <img src={images[index].image} className="visualizer-item-img" />
            <button onClick={next} className="visualizer-button">{">"}</button>
        </div>
    );
}

export default VisualizerCarousel;