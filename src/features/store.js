import { configureStore } from "@reduxjs/toolkit";
import reserversationsReducer from './reservationSlice'
import customerReducer from './customerSlice'


export const store = configureStore({
    reducer: {
        reservations: reserversationsReducer,
        customer: customerReducer,
    }
})