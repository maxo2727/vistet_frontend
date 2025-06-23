import React, { useState } from "react";
import './CatalogComponent.css';
import Card from "../Layout/Card/Card.jsx";
import Button from "../Layout/Button/Button.jsx";
import ClothingCard from "../ClothingCard/ClothingCard.jsx";
import TabList from "../Layout/TabList/TabList.jsx";
import Input from "../Layout/Input/Input.jsx";

const tabs = ['Todos', 'Poleras', 'Pantalones', 'Gorro']


const CatalogComponent = ({ storeItems, onSelectOutfit }) => {
    const [activeTab, setActiveTab] = useState(0)

    const filterItemsByTab = (items, tab) => {
        switch (tab) {
            case 'Todos':
                return items;
            case 'Poleras':
                return items.filter(item => item.type === 'POLERA');
            case 'Pantalones':
                return items.filter(item => item.type === 'PANTS' || item.type === 'SHORTS');
            case 'Gorro':
                return items.filter(item => item.type === 'ACCESSORIES');
        }
    }

    const filteredItems = filterItemsByTab(storeItems, tabs[activeTab]);

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
                    {filteredItems.map((item) => (
                        <ClothingCard 
                            key={item.id} 
                            clothingItem={item}
                            onSelectItem={onSelectOutfit}
                        />
                    ))}
                </div>
            </Card>
        </div>
    );
}

export default CatalogComponent;