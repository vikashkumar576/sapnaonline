import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    book: []
}

const slugSlice = createSlice({
    name: "allBooks",
    initialState,
    reducers:{
        setSlug: (state, action)=>{
            const data = action.payload
            state.book = data
        }
    }
})

export const {setSlug} = slugSlice.actions
export default slugSlice.reducer