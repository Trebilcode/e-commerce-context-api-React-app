import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';
import { CartContext } from '../../providers/cart/cart.provider';

const CartDropdown = ({ history }) => {

  const { cartItems } = useContext(CartContext);
  const { toggleHidden } = useContext(CartContext);

  return(
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        toggleHidden();
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
)};



export default withRouter(CartDropdown);
