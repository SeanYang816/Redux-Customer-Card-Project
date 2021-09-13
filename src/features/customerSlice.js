import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: []
}

export const customerSlice = createSlice({
    name: "customers",
    initialState,
    reducers: {

    }
})

export const {} = customerSlice.actions;

export default customerSlice.reducer;