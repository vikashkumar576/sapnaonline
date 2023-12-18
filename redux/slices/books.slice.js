import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: []
}

const booksSlice = createSlice({
    name: "allBooks",
    initialState,
    reducers:{
        setBooks: (state, action)=>{
            const data = action.payload
            state.books = data
        }
    }
})

export const {setBooks} = booksSlice.actions
export default booksSlice.reducer