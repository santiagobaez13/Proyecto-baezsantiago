import React from 'react';

const CartItem = ({ id, name, quantity, price }) => {
  return (
    <div>
      <p>{name}</p>
      <p>Cantidad: {quantity}</p>
      <p>Precio unitario: ${price}</p>
    </div>
  );
}

export default CartItem;
