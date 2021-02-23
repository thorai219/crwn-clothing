import React from "react";

import {
  CartItemContainer,
  ItemDetails,
  ItemImage,
  ItemName,
} from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <ItemImage src={imageUrl} alt="item" />
    <ItemDetails>
      <ItemName>{name}</ItemName>
      <span className="price">
        {quantity} X ${price}
      </span>
    </ItemDetails>
  </CartItemContainer>
);

export default CartItem;
