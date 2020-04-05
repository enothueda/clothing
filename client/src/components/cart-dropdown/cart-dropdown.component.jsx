import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CartItem from '../cart-item/cart-item.component';

import { CartDropdownContainer, CartItemsContainer, EmptyCartContainer, CheckoutButton } from './cart-dropdown.styles';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <CartDropdownContainer>
        <CartItemsContainer>
        {
            cartItems.length ?
                cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} item={cartItem} />
                ))
                : (
                    <EmptyCartContainer>Your cart is empty</EmptyCartContainer>
                )
        }
        </CartItemsContainer>
        <CheckoutButton onClick={() => {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }} >
        GO TO CHECKOUT
        </CheckoutButton>    
    </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));