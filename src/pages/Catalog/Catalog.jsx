import React from "react";
import Card from "../../components/Card/Card.jsx";
import Button from "../../components/Button/Button.jsx";
import './Catalog.css';

const Catalog = () => {
    return (
        <div className="catalog-wrapper">
            <Card>
                <div className="catalog-header">
                    <div className="catalog-title">
                        Catálogo
                    </div>
                    <div className="catalog-buttons">
                        <Button onClick={() => console.log('hola')} className={'accept-button'}>
                            Subir prenda
                        </Button>
                    </div>
                </div>
                <p>Browse our collection of outfits.</p>
            </Card>
        </div>
    );
}

export default Catalog;