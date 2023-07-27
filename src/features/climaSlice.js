import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pronostico: [],
    pronosticoMin: []
}

export const climaSlice = createSlice({
    name: "clima",
    initialState,
    reducers: {
        guardarPronostico: (state, action) => {
            state.pronostico = action.payload.temperature_2m_max;
            state.pronosticoMin = action.payload.temperature_2m_min;
        }
    }
})

export const { guardarPronostico } = climaSlice.actions;

export default climaSlice.reducer;