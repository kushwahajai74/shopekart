import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/products/productSlice";
import productDetailsReducer from "./features/products/productDetailsSlice";
import UserReducer from "./features/User/UserSlice";
import userUpdateReducer from "./features/user/userUpdateSlice";
import forgotPassworReducer from "./features/user/forgotPasswordSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    productDetails: productDetailsReducer,
    user: UserReducer,
    profile: userUpdateReducer,
    forgotPassword: forgotPassworReducer,
  },
});

export default store;
