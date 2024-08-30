import { createSlice } from "@reduxjs/toolkit";

type TBooking = {
  GPS: boolean | null;
  car: string | null;
  childSeat: boolean | null;
  creditCard: number | null;
  drivingLicense: string | null;
  passport: string | null;
  userEmail: string | null;
};

const initialState: TBooking = {
  GPS: null,
  car: null,
  childSeat: null,
  creditCard: null,
  drivingLicense: null,
  passport: null,
  userEmail: null,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBooking: (state, action) => {
      const {
        GPS,
        car,
        childSeat,
        creditCard,
        drivingLicense,
        passport,
        userEmail,
      } = action.payload;

      state.GPS = GPS;
      state.car = car;
      state.childSeat = childSeat;
      state.creditCard = creditCard;
      state.drivingLicense = drivingLicense;
      state.passport = passport;
      state.userEmail = userEmail;
    },
    resetBooking: (state) => {
      state.GPS = null;
      state.car = null;
      state.childSeat = null;
      state.creditCard = null;
      state.drivingLicense = null;
      state.passport = null;
      state.userEmail = null;
    },
  },
});

export const { setBooking, resetBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
