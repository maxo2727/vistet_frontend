import React from "react";
import './Input.css';

const Input = ({ placeholder, onChange, value }) => {
    return (
        <input className="input" placeholder={placeholder} onChange={onChange} value={value} />
    );
}

export default Input;