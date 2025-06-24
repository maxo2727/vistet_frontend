import React, { useEffect, useState } from 'react';
import "./Carousel.css";
import Spinner from '../Spinner/Spinner';

const VisualizerCarousel = ({ images, selectedItem, onSelectOutfit }) => {
    console.log("VisualizerCarousel images:", images);
    console.log("VisualizerCarousel selectedItem:", selectedItem);
    const [index, setIndex] = useState(0);
    
    const prev = () => {
        const newIndex = (index - 1 + images.length) % images.length;
        setIndex(newIndex);
        onSelectOutfit(images[newIndex], images[newIndex].type);
    };
    const next = () => {
        const newIndex = (index + 1) % images.length;
        setIndex(newIndex);
        onSelectOutfit(images[newIndex], images[newIndex].type);
    };

    useEffect(() => {
        const newIndex = images.findIndex(item => item.id === selectedItem.id);
        setIndex(newIndex);
    }, [selectedItem, images]);

    if (!selectedItem) {
        return (
            <div className="visualizer-item">
                <Spinner />
            </div>
        )
    }

    return (
        <div className="visualizer-item">
            <button onClick={prev} className="visualizer-button">{"<"}</button>
            <img src={selectedItem.image_display_url} className="visualizer-item-img" />
            <button onClick={next} className="visualizer-button">{">"}</button>
        </div>
    );
}

export default VisualizerCarousel;