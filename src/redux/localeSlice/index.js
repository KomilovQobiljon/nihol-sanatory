import { createSlice } from "@reduxjs/toolkit";

const localeSlice = createSlice({
  name: "localeSlice",
  initialState: {
    lang: "en",
  },
  reducers: {
    switchLocale(state, { payload }){
      state.lang = payload;
    }
  }
})

export const { switchLocale } = localeSlice.actions;
export default localeSlice.reducer;