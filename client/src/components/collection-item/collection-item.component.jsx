import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';


import { ItemContainer, ImageContainer, FooterContainer, NameContainer, PriceContainer, AddButton } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
    <ItemContainer>
        <ImageContainer            
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <FooterContainer >
            <NameContainer>{name}</NameContainer>
            <PriceContainer>$ {price}</PriceContainer>
        </FooterContainer>
        <AddButton onClick={() => addItem(item)} inverted> Add to cart </AddButton>
    </ItemContainer>
)};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);