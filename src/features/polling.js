import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
    interval: 0
}

export const pollingSlice = createSlice({
    name: "polling",
    initialState: {
        value: initialStateValue
    },
    reducers: {
        setPollingInterval: (state, action) => {
            state.value = action.payload
        },
        removePollingInterval: (state, action) => {
            state.value = initialStateValue
        }
    }
})

export const { setPollingInterval, removePollingInterval } = pollingSlice.actions;
export default pollingSlice.reducer;