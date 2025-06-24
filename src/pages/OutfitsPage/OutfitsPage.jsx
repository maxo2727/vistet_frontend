import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OutfitsPage.css';
import OutfitCard from '../../components/OutfitCard/OutfitCard.jsx';

const OutfitsPage = () => {
    const [outfits, setOutfits] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [allComments, setAllComments] = useState([]);

    const fetchOutfits = async () => {
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/api/outfit/all/`)
            setOutfits(result.data.results);
            console.log("Outfits fetched:", result.data.results);
        } catch (error) {
            console.error("Error fetching outfits:", error);
        }
    }

    const getAllProducts = async () => {
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/api/clothe/all/`)
            setAllProducts(result.data.results);
            console.log("Products fetched:", result.data.results);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    }

    const getAllComments = async () => {
        try {
            const result = await axios.get(`${import.meta.env.VITE_API_URL}/api/comment/all/`)
            console.log("Comments fetched:", result.data.results);
            setAllComments(result.data.results);
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    }

    const handleOutfitComponents = (outfit) => {
        return allProducts.filter(product => outfit.components.includes(product.id))
    }

    const handleOutfitComments = (outfitId) => {
        return allComments.filter(comment => comment.outfit === outfitId);
    }

    useEffect(() => {
        fetchOutfits();
        getAllProducts();
        getAllComments();
    }, []);

    return (
        <div className="outfits-page-wrapper">
            <div className="outfits-page-content">
                <h2>Mis Outfits</h2>
                <div className="outfits-cards-container">
                    {outfits.map((outfit, index) => (
                        <OutfitCard 
                            key={index} 
                            outfitData={outfit} 
                            products={handleOutfitComponents(outfit)}
                            comments={handleOutfitComments(outfit.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default OutfitsPage;