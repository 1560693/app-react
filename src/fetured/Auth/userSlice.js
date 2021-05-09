import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userApi from '../../api/userApi';

// const { createSlice } = require('@reduxjs/toolkit');

// const userSlice = createSlice({
//     name: 'user',
//     initialState: {
//         current: {},
//         settings: {},
//     },
//     reducers: {},
// });

// const { reducer } = userSlice;
// export default reducer;

const register = createAsyncThunk('user/register', async (payload) => {
    //call api register
    //save data to local storage
    return {};
});
