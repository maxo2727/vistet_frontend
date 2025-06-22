import React, { useEffect } from "react";
import VisualizerComponent from "../../components/VisualizerComponent/VisualizerComponent.jsx";
import CatalogComponent from "../../components/CatalogComponent/CatalogComponent.jsx";
import './VisualizerPage.css';
import storeItems from "../../data/StoreItemsDummy.jsx";
import axios from "axios";

const VisualizerPage = () => {

    const getClothes = async () => {
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/api/clothe/all/`)
            console.log(result.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        console.log(`${import.meta.env.VITE_API_URL}/api/clothe/all/`)
        getClothes();
    }, []);

    return (
            <div className="visualizer-page-wrapper">
                <div className="visualizer-page-content">
                    <VisualizerPageHeader />
                    <VisualizerPageBody />
                </div>
            </div> 
    )
}

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
            <VisualizerComponent storeItems={storeItems}/>
            <CatalogComponent storeItems={storeItems}/>
        </div>
    );
}

export default VisualizerPage;