import { createSlice } from '@reduxjs/toolkit';

const modalSlice = createSlice({
  name: "modalSlice",
  initialState: {
    profileModalVisibility: false,
    localeModalVisibility: false,
  },
  reducers: {
    switchProfileModalVisibility(state){
      state.profileModalVisibility = !state.profileModalVisibility;
    },
    switchLocaleModalVisibility(state){
      state.localeModalVisibility = !state.localeModalVisibility;
    },
  }
});

export default modalSlice.reducer;
export const { switchProfileModalVisibility, switchLocaleModalVisibility } = modalSlice.actions;