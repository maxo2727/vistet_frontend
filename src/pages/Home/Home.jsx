import React from "react";
import Card from "../../components/Card/Card.jsx";
import Button from "../../components/Button/Button.jsx";
import Visualizer from "../Visualizer/Visualizer.jsx";
import Catalog from "../Catalog/Catalog.jsx";
import './Home.css';

const HomeHeader = () => {
    return (
        <div className="home-header">
            Arma tu Outfit Perfecto
        </div>
    );
}

const HomeBody = () => {
    return (
        <div className="home-cards-container">
            <Visualizer />
            <Catalog />
        </div>
    );
}

const Home = () => {
    return (
            <div className="home-page">
                <HomeHeader />
                <HomeBody />    
            </div> 
    )
}

export default Home;