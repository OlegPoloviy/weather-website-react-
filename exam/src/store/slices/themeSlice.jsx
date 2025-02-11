import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: true,
    reducers: {
        toggleTheme: (state) => !state
    }
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
