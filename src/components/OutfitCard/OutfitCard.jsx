import React, { useState } from 'react';
import './OutfitCard.css';
import Card from '../Layout/Card/Card';
import Button from '../Layout/Button/Button';
import CommentModal from '../CommentModal/CommentModal';
import { useNavigate } from 'react-router-dom';

const OutfitCard = ({ outfitData, products, comments }) => {
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const navigate = useNavigate();
    
    const handleLoadOutfit = () => {
        navigate('/visualizer', {
            state: {
                selectedOutfitLoaded: outfitData, 
                productsLoaded: products
            }
        })
    }
    
    return (
        <div className="outfit-card-wrapper">
            <Card>
                <div className="outfit-card-content-wrapper">
                    <div className="outfit-image-wrapper">
                        <div className="outfit-image-content">
                           <img src={products[0].image_display_url} className="outfit-image" /> 
                        </div>
                    </div>
                    <div className="outfit-text-wrapper">
                        <div className='outfit-text-content'>
                            <div className="outfit-title">{outfitData.name}</div>
                            <p>Rating: {outfitData.rating}</p>
                            <div className="outfit-comments-wrapper">
                                {comments.length > 0 ? (
                                    <div className="outfit-comments-content">
                                        <div className="outfit-comment-title">{comments[0].title}:</div>
                                        <div className="outfit-comment-message">{comments[0].message}</div>
                                    </div>
                                ) : (
                                    <div>
                                        No hay comentarios
                                    </div>
                                )
                                }
                            </div>                         
                        </div>
                    </div>
                    <div className="outfit-buttons-wrapper">
                        <div className='outfit-buttons-content'>
                            <Button className='accept-button' onClick={handleLoadOutfit}>
                                Cargar
                            </Button>
                            <Button className='accept-button' onClick={() => setIsCommentModalOpen(true)}>
                                Comentar
                            </Button>                
                        </div>
                    </div>
                </div>
            </Card>
            <CommentModal 
                isOpen={isCommentModalOpen} 
                onClose={() => setIsCommentModalOpen(false)}
                outfitData={outfitData}
            />
        </div>
    )
}

export default OutfitCard;