import React, { useEffect, useState } from "react";
import VisualizerComponent from "../../components/VisualizerComponent/VisualizerComponent.jsx";
import CatalogComponent from "../../components/CatalogComponent/CatalogComponent.jsx";
import './VisualizerPage.css';
import axios from "axios";

const VisualizerPage = () => {
    const [storeItems, setStoreItems] = useState([]);

    const handleAccesoriesNameError = (storeItem) => {
        switch (storeItem.name) {
            case "Product 7670558064702":
                return "Trucker DeathWish Azul";
            case "Product 7521102233662":
                return "Gorro Hunter Camo";
            case "Product 7670560129086":
                return "Gorro Podium Shapeless Cotelé";
        }
    }

    const setFixedStoreItems = (storeItems) => {
        const fixedStoreItems = storeItems.map((storeItem) => {
            return {
                ...storeItem,
                name: storeItem.name.includes("Product") ? handleAccesoriesNameError(storeItem) : storeItem.name
            }
        });
        console.log(fixedStoreItems);
        setStoreItems(fixedStoreItems);
    }

    const getClothes = async () => {
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/api/clothe/all/`)
            setFixedStoreItems(result.data.results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    useEffect(() => {
        getClothes();
    }, []);

    return (
            <div className="visualizer-page-wrapper">
                <div className="visualizer-page-content">
                    <VisualizerPageHeader />
                    <VisualizerPageBody storeItems={storeItems}/>
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

const VisualizerPageBody = ({ storeItems }) => {
    console.log(storeItems);
    return (
        <div className="visualizer-page-cards-container">
            <VisualizerComponent storeItems={storeItems}/>
            <CatalogComponent storeItems={storeItems}/>
        </div>
    );
}

export default VisualizerPage;