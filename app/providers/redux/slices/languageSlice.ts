"use client";
import { createSlice } from '@reduxjs/toolkit';

interface LanguageState {
  language: string;
}

const initialState: LanguageState = {
  language: 'en',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state:any, action:any) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
