import { createSlice } from "@reduxjs/toolkit";

export const prestamoSlice = createSlice({
  name: "prestamo",
  initialState: {
    appointment: {

    }
  },
  reducers: {
    edit: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
    
    }
  }
)

export const {edit} = prestamoSlice.actions;
export const prestamoData = (state) => state.prestamo;
export default prestamoSlice.reducer;