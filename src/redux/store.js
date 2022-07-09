import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import likeList from "./likeList";


export default configureStore({
    reducer: {
        cartProds: cart,
        likeListProds: likeList,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
})