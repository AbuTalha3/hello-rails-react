import { createSlice } from '@reduxjs/toolkit';
import fetchGreeting from '../thunk';

const initialState = {
    greeting: '',
    isLoading: true,
    error: false,
    errorMessage: '',
};

const greetingSlice = createSlice({
    name: 'greeting',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchGreeting.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchGreeting.fulfilled, (state, action) => {
                state.isLoading = false;
                state.greeting = action.payload.text;
            })
            .addCase(fetchGreeting.rejected, (state, action) => {
                state.isLoading = false;
                state.error = true;
                state.errorMessage = action.payload.error;
            });
    }
});

export default greetingSlice.reducer;