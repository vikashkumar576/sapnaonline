import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    publishers: []
}
const publisherSlice = createSlice({
    name: "allPublishers",
    initialState,
    reducers:{
        setPublishers: (state, action)=>{
            state.publishers = action.payload
        }
    }
})

export const {setPublishers} = publisherSlice.actions
export default publisherSlice.reducer