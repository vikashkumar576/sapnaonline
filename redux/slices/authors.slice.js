import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    authors: []
}

const authorSlice = createSlice({
    name: 'allAuthors',
    initialState,
    reducers:{
        setAuthors : (state, action)=>{
            const data = action.payload
            state.authors = data
        }
    }
})

export const {setAuthors} = authorSlice.actions
export default authorSlice.reducer