import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';

const apiUrl = ' http://localhost:3000/api/v1/greetings/random_greeting';

const fetchGreeting = createAsyncThunk('greetings/fetchGreeting', async (thunkAPI) => {
    try {
        const response = await axios.get(apiUrl);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({ error: error.message });
    }
});

export default fetchGreeting;