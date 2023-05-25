import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  genre: "all",
  price: 50 /*  { price: 50 } */,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterGenre(state, action) {
      state.genre = action.payload;
    },
    setFilterPrice(state, action) {
      state.price = action.payload;
    },
  },
});

export const { setFilterGenre, setFilterPrice } = filterSlice.actions;

export default filterSlice.reducer;
