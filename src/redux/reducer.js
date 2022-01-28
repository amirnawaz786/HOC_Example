
import Types from "./CartItem";
const initialState = {
    cartItems:[],
    theme:"light",
};

const cartItemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_TO_CART:
            return {
                ...state,
                cartItems : action.payload
            }
        case Types.REMOVE_FROM_CART:
            return state.filter((item)=>item.id !== action.payload.id);
        case Types.THEME:
            return {
                ...state,
                theme: action.payload,
            }
    }
    return state;
}

export default cartItemsReducer
