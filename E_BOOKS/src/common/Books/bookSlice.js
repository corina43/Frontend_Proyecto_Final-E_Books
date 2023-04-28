import { createSlice } from "@reduxjs/toolkit";

export const bookSlice = createSlice({
  name: "book",
  initialState: {
    details: {},
    query: "",
    search: [],
    prestamos: [],
    byAutor: [],
  },
  reducers: {
    addBook: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addSearch: (state, action) => {
      return {
        ...state,
        search: action.payload,
      };
    },
    addCriteria: (state, action) => {
      return {
        ...state,
        query: action.payload,
      };
    },
    addPrestamos: (state, action) => {
      return {
        ...state,
        prestamos: action.payload
      }
    },
    addByAutor: (state, action) => {
      return {
        ...state,
        byAutor: action.payload
      }
    }
  },
});

export const { addBook, addSearch, addCriteria, addByAutor } = bookSlice.actions;

export const bookData = (state) => state.book;
export const autorData = (state) => state.book.byAutor;
export default bookSlice.reducer;
