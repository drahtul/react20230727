import { configureStore } from "@reduxjs/toolkit";
import climaReducer from "../features/climaSlice";

export const store = configureStore({
    reducer: {
        clima: climaReducer    
    }
})