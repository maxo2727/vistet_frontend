import React, { useState } from "react";
import axios from "axios";
import "./SaveOutfitModal.css";
import Modal from "../Layout/Modal/Modal.jsx";
import Input from "../Layout/Input/Input.jsx";
import Button from "../Layout/Button/Button.jsx";

const SaveOutfitModal = ({ isOpen, onClose, selectedOutfit }) => {
    const [name, setName] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        await handleSaveOutfit();
        onClose();
        setName("");
    }

    const handleSaveOutfit = async () => {
        console.log("Saving outfit with name:", name);
        try {
            const outfitIds = Object.values(selectedOutfit).map(item => item.id);
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/outfit/`, {
                name: name,
                user: 1,
                rating: 1,
                components: outfitIds
            });
            console.log("Outfit posted successfully:", response.data);
        } catch (error) {
            console.error("Error posting outfit:", error);
        }
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} >
            <form className="save-outfit-modal-content" onSubmit={handleSubmit}>
                <div className="save-outfit-modal-header">
                    <div className="save-outfit-modal-header-text">Save Outfit</div>
                </div>
                <div className="save-outfit-modal-inputs">
                    <Input 
                        placeholder={"Nombre de Outfit"}
                        value={name}
                        onChange={handleChangeName}
                    />
                </div>
                <div className="save-outfit-modal-actions">
                    <Button className="accept-button" type="submit">Save</Button>
                    <Button className="cancel-button" onClick={onClose}>Cancel</Button>
                </div>
            </form>
        </Modal>
    )
}

export default SaveOutfitModal;