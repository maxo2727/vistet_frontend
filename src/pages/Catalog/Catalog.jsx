import React, { useState } from "react";
import './Catalog.css';
import Card from "../../components/Card/Card.jsx";
import Button from "../../components/Button/Button.jsx";
import ClothingCard from "../../components/ClothingCard/ClothingCard.jsx";
import TabList from "../../components/TabList/TabList.jsx";
import Input from "../../components/Input/Input.jsx";

const tabs=['Todos', 'Camisas', 'Pantalones', 'Zapatos']


const Catalog = () => {
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
                    <ClothingCard clothingItem={'Camisa'} />
                    <ClothingCard clothingItem={'Pantalón'} />
                    <ClothingCard clothingItem={'Chaqueta'} />
                    <ClothingCard clothingItem={'Zapatos'} />
                    <ClothingCard clothingItem={'Sombrero'} />
                    <ClothingCard clothingItem={'Sombrero'} />
                    <ClothingCard clothingItem={'Sombrero'} />
                    <ClothingCard clothingItem={'Sombrero'} />
                    <ClothingCard clothingItem={'Sombrero'} />
                    <ClothingCard clothingItem={'Sombrero'} />
                </div>
            </Card>
        </div>
    );
}

export default Catalog;