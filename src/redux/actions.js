import Types from "./CartItem";

export const addToCart = (value) => {
   return {
       type : Types.ADD_TO_CART,
       payload:value
   }
}
export const removeCart = (item) => {
    state.filter(cartItem => cartItem.id !== action.payload.id)
}
export const manageTheme = (theme) =>{
    return {
        type : Types.THEME,
        payload:theme,
    }
}
