import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product, handleRemoveItem }) => {
    const { id, name, img, seller, quantity, price, shipping, ratings } = product
    return (
        <div className='review-details-container'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='item-details-container'>
                <div className='title-container'>
                    <p>{name}</p>
                    <p><small>Price: <span className='value'>${price}</span></small></p>
                    <p><small>Quantity: <span className='value'>{quantity}</span></small></p>
                    <p><small>Shipping Charge: <span className='value'>${shipping}</span></small></p>
                </div>
                <div className='delete-container'>
                    <button onClick={() => handleRemoveItem(id)} className='btn-delete'>
                        <FontAwesomeIcon className='icon-delete' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;