import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGood } from "../data/goods";

const initialState = {cart: []} as {cart: IGoodInCart[]};

export interface IGoodInCart {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

const cartSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        addGood(state, action: PayloadAction<IGood>){
            let quantity = 1;

            const indexInOrder = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (indexInOrder > -1) {
                quantity = state.cart[indexInOrder].quantity + 1;

                state.cart = state.cart.map((item) => {
                    if (item.id !== action.payload.id) return item;
                    return {
                        id: item.id,
                        name: item.name,
                        price: item.price,
                        quantity,
                    };
                });
            } else {
                state.cart = [
                        ...state.cart,
                        {
                            id: action.payload.id,
                            name: action.payload.name,
                            price: action.payload.price,
                            quantity,
                        },
                    ];
            }
        },
        removeGood(state, action:  PayloadAction<string>){
            state.cart = state.cart.filter(good => good.id !== action.payload);
        }
    }
});

export const {addGood, removeGood} = cartSlice.actions;
export default cartSlice.reducer;