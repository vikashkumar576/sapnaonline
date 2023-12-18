import { configureStore } from "@reduxjs/toolkit";
import authorsSlice from "./slices/authors.slice";
import publisherSlice from "./slices/publishers.slice";
import booksSlice from "./slices/books.slice";
import slugSlice from "./slices/slug.slice";

const store = configureStore({
    reducer: {
        authorsSlice,
        publisherSlice,
        booksSlice,
        slugSlice
    }
})

export default store