import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"

const Shop = () => {
    const products = useLoaderData()
    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }

    useEffect(() => {
        const storedProduct = getStoredCart()
        const savedCart = []
        for (const id in storedProduct) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedProduct[id]
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/orders'>
                        <button className='review-btn'>Review Order <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></button>
                    </Link>
                </Cart>
            </div>
        </div>
    );


};

export default Shop;