import { createSlice } from '@reduxjs/toolkit';
export const detailSlice = createSlice({
    name: 'detail',
    initialState: {
      choosenObject: {}
    },
    reducers: {
      addChoosen: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
        },
        detailProducto: (state, action) => {
          return {
            ...state,
            ...action.payload
        }
        },
        detailPrestamo: (state, action) => {
            return {
              ...state,
              ...action.payload
            }  
      },
    }
});
//exporto las ACCIONES.....
export const { addChoosen } = detailSlice.actions;
export const { detailProducto } = detailSlice.actions;
export const { detailPrestamo } = detailSlice.actions;
export const detailData = (state) => state.detail;
export default detailSlice.reducer;
