import React from "react";
import './Input.css';

const Input = ({ placeholder, onChange, name, value }) => {
    return (
        <input className="input" placeholder={placeholder} onChange={onChange} name={name} value={value} />
    );
}

export default Input;