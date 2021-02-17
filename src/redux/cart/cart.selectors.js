import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const selectCartItems = createSelector(
  [cartSelector],
  (cart) => cart.cartItems
);

export const selectCartItemCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0)
);
