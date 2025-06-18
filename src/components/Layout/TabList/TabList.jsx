import React from "react";
import './TabList.css';
import Button from "../Button/Button.jsx";

const TabList = ({ tabs, activeTab, onTabClick }) => {
    return (
        <div className="tablist">
            {tabs.map((tab, index) => (
                <Button
                    key={index}
                    className={`tablist-button ${activeTab === tab ? 'active' : ''}`}
                    onClick={() => onTabClick(index)}
                >
                    {tab}
                </Button>
            ))}
        </div>
    )
}

export default TabList;