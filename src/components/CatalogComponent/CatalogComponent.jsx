import React, { useState } from "react";
import './CatalogComponent.css';
import Card from "../Layout/Card/Card.jsx";
import Button from "../Layout/Button/Button.jsx";
import ClothingCard from "../ClothingCard/ClothingCard.jsx";
import TabList from "../Layout/TabList/TabList.jsx";
import Input from "../Layout/Input/Input.jsx";

const tabs=['Todos', 'Camisas', 'Pantalones', 'Zapatos']


const CatalogComponent = ({ storeItems }) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div className="catalog-card-wrapper">
            <Card>
                <div className="catalog-header">
                    <div className="catalog-title">
                        Catálogo
                    </div>
                    <div className="catalog-buttons">
                        <Button onClick={() => console.log('hola')} className={'accept-button'}>
                            Tienda
                        </Button>
                        <Button onClick={() => console.log('hola')} className={'accept-button'}>
                            Propias
                        </Button>
                    </div>
                </div>
                <div className="catalog-tabs">
                    <TabList
                        tabs={tabs}
                        activeTab={tabs[activeTab]}
                        onTabClick={setActiveTab}
                    />
                </div>
                <div className="catalog-search">
                    <Input 
                        placeholder={'Buscar ropa...'}
                    />
                </div>   
                <div className="catalog-grid">
                    {/* <ClothingCard clothingItem={'Camisa'} />
                    <ClothingCard clothingItem={'Pantalón'} />
                    <ClothingCard clothingItem={'Chaqueta'} />
                    <ClothingCard clothingItem={'Zapatos'} />
                    <ClothingCard clothingItem={'Sombrero'} />
                    <ClothingCard clothingItem={'Sombrero'} />
                    <ClothingCard clothingItem={'Sombrero'} />
                    <ClothingCard clothingItem={'Sombrero'} />
                    <ClothingCard clothingItem={'Sombrero'} />
                    <ClothingCard clothingItem={'Sombrero'} /> */}
                    {storeItems.map((item) => (
                        <ClothingCard 
                            key={item.id} 
                            clothingItem={item} 
                        />
                    ))}
                </div>
            </Card>
        </div>
    );
}

export default CatalogComponent;