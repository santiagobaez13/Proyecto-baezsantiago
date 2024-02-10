import React, { useContext } from 'react';
import cartt from './assets/cartt.svg';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to='/cart' className='CartWidget'>
      <div className='CartContainer'>
        <img src={cartt} alt='cart-widget' className='CartImg' />
        {totalQuantity > 0 && (
          <span className='CartCount'>
            {totalQuantity}
          </span>
        )}
      </div>
    </Link>
  );
}

export default CartWidget;