import React from 'react';

import { CartItemContainer, ItemImage, DetailsContainer, NameContainer, PriceContainer } from './cart-item.styles'

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <ItemImage src={imageUrl} alt='item' />
        <DetailsContainer >
            <NameContainer >{name}</NameContainer>
            <PriceContainer >{quantity} x {price}</PriceContainer>
        </DetailsContainer>
    </CartItemContainer>
);

export default CartItem;