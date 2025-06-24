import React, { useEffect, useState } from "react";
import VisualizerComponent from "../../components/VisualizerComponent/VisualizerComponent.jsx";
import CatalogComponent from "../../components/CatalogComponent/CatalogComponent.jsx";
import './VisualizerPage.css';
import axios from "axios";
import { useLocation } from "react-router-dom";


const VisualizerPage = () => {
    const location = useLocation();
    const [storeItems, setStoreItems] = useState([]);
    const [selectedOutfit, setSelectedOutfit] = useState({});

    const handleSelectOutfit = (item, itemType) => {
        const outfitType = handleItemTypeSelection(itemType);
        setSelectedOutfit((prevOutfit) => ({
            ...prevOutfit,
            [outfitType]: item
        }));
    }

    const handleItemTypeSelection = (itemType) => {
        switch (itemType) {
            case 'ACCESSORIES':
                return 'accesorio';
            case 'POLERA':
                return 'polera';
            case 'PANTS':
                return 'pantalon';
            case 'SHORTS':
                return 'pantalon';
        }
    }

    const initiateVisualizerPage = async () => {
        const result = await axios.get(`${import.meta.env.VITE_API_URL}/api/clothe/all/`)
        const fixedStoreItems = fixStoreItems(result.data.results);
        setStoreItems(fixedStoreItems);
        if (location.state && location.state.selectedOutfitLoaded) {
            const lodadedProducts = location.state.productsLoaded;
            console.log("loading outfit from state!", lodadedProducts);
            const loadedSelectedOutfit = {
                "accesorio": lodadedProducts.find(item => item.type === 'ACCESSORIES') || null,
                "polera": lodadedProducts.find(item => item.type === 'POLERA') || null,
                "pantalon": lodadedProducts.find(item => item.type === 'PANTS' || item.type === 'SHORTS') || null,
            };
            console.log("loading outfit!", loadedSelectedOutfit);
            setSelectedOutfit(loadedSelectedOutfit);
        } else {
            console.log("setting default outfit");
            setDefaultOutfit(fixedStoreItems);
        }
    }

    const fixStoreItems = (storeItems) => {
        const fixedStoreItems = storeItems.map((storeItem) => {
            return {
                ...storeItem,
                name: storeItem.name.includes("Product") ? handleAccesoriesNameError(storeItem) : storeItem.name
            }
        });
        return fixedStoreItems;
    }

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

    const setDefaultOutfit = (fixedStoreItems) => {
        const defaultOutfit = {
            "accesorio": fixedStoreItems.find(item => item.type === 'ACCESSORIES') || null,
            "polera": fixedStoreItems.find(item => item.type === 'POLERA') || null,
            "pantalon": fixedStoreItems.find(item => item.type === 'PANTS' || item.type === 'SHORTS') || null,
        };
        setSelectedOutfit(defaultOutfit);
    }

    useEffect(() => {
        initiateVisualizerPage();
    }, [location.state]);

    return (
            <div className="visualizer-page-wrapper">
                <div className="visualizer-page-content">
                    <VisualizerPageHeader />
                    <VisualizerPageBody 
                        storeItems={storeItems}
                        selectedOutfit={selectedOutfit}
                        onSelectOutfit={handleSelectOutfit}
                    />
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

const VisualizerPageBody = ({ storeItems, selectedOutfit, onSelectOutfit }) => {
    return (
        <div className="visualizer-page-cards-container">
            <VisualizerComponent 
                storeItems={storeItems}
                selectedOutfit={selectedOutfit}
                onSelectOutfit={onSelectOutfit}
            />
            <CatalogComponent 
                storeItems={storeItems}
                onSelectOutfit={onSelectOutfit}
            />
        </div>
    );
}

export default VisualizerPage;