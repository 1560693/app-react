import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../fetured/Auth/userSlice';

const rootReducer = {
    user: userReducer,
};
const store = configureStore({
    reducer: rootReducer,
});
export default store;
