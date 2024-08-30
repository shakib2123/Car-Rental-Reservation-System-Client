import { createSlice } from "@reduxjs/toolkit";

export type TOptions = {
  insurance: string | null;
  GPS: boolean | null;
  childSeat: boolean | null;
  searchValue: string;
};

const initialState: TOptions = {
  insurance: null,
  GPS: null,
  childSeat: null,
  searchValue: "",
};

const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    setOptions: (state, action) => {
      const { insurance, GPS, childSeat } = action.payload;
      state.insurance = insurance === "" ? null : insurance;
      state.GPS = GPS;
      state.childSeat = childSeat;
    },
    resetOptions: (state) => {
      state.insurance = null;
      state.GPS = null;
      state.childSeat = null;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { resetOptions, setOptions, setSearchValue } = carSlice.actions;

export default carSlice.reducer;
