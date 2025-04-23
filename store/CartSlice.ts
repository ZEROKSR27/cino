import { createSlice } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
    quantity: number;
}

export interface CartState {
    cartItems: CartItem[];
}

const initialState: CartState = {
    cartItems: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action) {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem) {
                existingItem.quantity++;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        removeItemFromCart(state, action) {
            const existingItem = state.cartItems.find(
                (item) => item.id === action.payload.id
            );
            if (existingItem && existingItem.quantity > 1) {
                existingItem.quantity--;
            } else {
                state.cartItems = state.cartItems.filter(
                    (item) => item.id !== action.payload.id
                );
            }
        },

        clearCart(state) {
            state.cartItems = [];
        },
    },
});

export const { addItemToCart, removeItemFromCart, clearCart } =
    cartSlice.actions;
export default cartSlice.reducer;
