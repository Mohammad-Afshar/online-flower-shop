import { products } from "../../data";
const initialState = {
  res: products,
  cart: [],
  total: 0,
  result: [],
};
export function productsReducers(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const updateCart = [...state.cart];
      const updatedItemIndex = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updateCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = { ...updateCart[updatedItemIndex] };
        updatedItem.quantity++;
        updateCart[updatedItemIndex] = updatedItem;
      }
      return {
        ...state,
        cart: updateCart,
        total: state.total + action.payload.price,
      };
    }

    case "REMOVE_IN_CART": {
      const updateCart = [...state.cart];
      const updatedItemIndex = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updateCart[updatedItemIndex] };
      if (updatedItem.quantity === 1) {
        const filterProduct = updateCart.filter(
          (item) => item.id !== action.payload.id
        );
        return {
          ...state,
          cart: filterProduct,
          total: state.total - action.payload.price,
        };
      } else {
        updatedItem.quantity--;
        updateCart[updatedItemIndex] = updatedItem;
        return {
          ...state,
          cart: updateCart,
          total: state.total - action.payload.price,
        };
      }
    }
    case "DELETE": {
      const updateCart = [...state.cart];
      const updatedItemIndex = updateCart.findIndex(
        (item) => item.id === action.payload.id
      );

      const filterProduct = updateCart.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        cart: filterProduct,
      };
    }

    case "RES": {
      const updateCart = [...state.res];
      if (action.payload.id in updateCart) {
        const up = updateCart[action.payload.id];

        return {
          ...state,
          result: up,
        };
      }
    }

    default:
      return state;
  }
}
