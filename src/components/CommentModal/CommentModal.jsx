import React, {useEffect, useState} from "react";
import Modal from "../Layout/Modal/Modal.jsx";
import Input from "../Layout/Input/Input.jsx"; 
import Button from "../Layout/Button/Button.jsx";
import axios from "axios";
import "./CommentModal.css";

const commentDataInitial = {
    title: "",
    message: "",
    user: "",
    outfit: ""
}

const CommentModal = ({ isOpen, onClose, outfitData }) => {
    const [commentData, setCommentData] = useState(commentDataInitial)

    const handleSubmit = (event) => {
        event.preventDefault();
        postComment();
        onClose();
    }

    const postComment = async () => {
        try {
            console.log("Posting comment with data:", commentData);
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/comment/`, commentData)
            console.log("Comment posted successfully:", response.data);
        } catch (error) {
            console.error("Error posting comment:", error);
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCommentData({
            ...commentData,
            [name]: value
        });
    }

    useEffect(() => {
        if (outfitData) {
            setCommentData({
                ...commentDataInitial,
                outfit: outfitData.id,
                user: outfitData.user
            })
        }
    }, [outfitData]);

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <form className="comment-modal-content" onSubmit={handleSubmit}>
                <div className="comment-modal-header">
                    <h2>Comentar Outfit</h2>
                </div>
                <div className="comment-modal-inputs">
                    <Input 
                        placeholder="Titulo"
                        onChange={handleInputChange}
                        value={commentData.title}
                        name="title"
                    />
                    <Input 
                        placeholder="Comentario"
                        onChange={handleInputChange}
                        value={commentData.message}
                        name="message"
                    />
                </div>
                <div className="comment-modal-buttons">
                    <Button className="accept-button" type="submit">Enviar Comentario</Button>
                    <Button className="cancel-button" onClick={onClose}>Cancelar</Button>
                </div>
            </form>
        </Modal>
    )
}

export default CommentModal;