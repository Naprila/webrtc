import { configureStore } from '@reduxjs/toolkit';
import userInfoSlice from "./userInfoSlice";

const store = configureStore({
    reducer: {
        userSlice: userInfoSlice
    },
});

export default store;