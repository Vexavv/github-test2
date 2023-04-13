import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    data: [],
    inputValue:'',
}


export const fetchAsyncMain = createAsyncThunk(
    "main/fetchAsyncMain",
    async ({ userName, userRepo }, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            };
            const response = await axios.get(
                `https://api.github.com/repos/${userName}/${userRepo}/issues`, config
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        changeValue(state, action) {
            state.inputValue = action.payload.inputValue
        },
    },
    extraReducers: builder => {
        builder
            // .addCase(fetchAsyncProducts.pending, (state) => {
            //     state.status = 'loading';
            // })
            .addCase(fetchAsyncMain.fulfilled, (state, action) => {
                state.data = action.payload;
                // state.status = 'loaded';
            })
            // .addCase(fetchAsyncProducts.rejected, (state, action) => {
            //     state.error = action.payload;
            //     state.status = 'loaded';
            // })
    }
})
export const {
    changeValue,
} = mainSlice.actions
export default mainSlice.reducer;