import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      // Check if product with same id and category exists
      const existing = state.items.find(
        item => item.id === product.id && item.category === product.category
      );
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const { id, category } = action.payload;
      state.items = state.items.filter(
        item => !(item.id === id && item.category === category)
      );
    },
    incrementQuantity(state, action) {
      const { id, category } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.category === category
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity(state, action) {
      const { id, category } = action.payload;
      const item = state.items.find(
        item => item.id === id && item.category === category
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Remove item if quantity reaches zero
          state.items = state.items.filter(
            i => !(i.id === id && i.category === category)
          );
        }
      }
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

// Export actions
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart
} = cartSlice.actions;

// Export the reducer as default for store.js
export default cartSlice.reducer;
