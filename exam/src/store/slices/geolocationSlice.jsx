import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
    name: "location",
    initialState: {
        position: null,
        error: null,
    },
    reducers: {
        setPosition: (state, { payload }) => {
            state.position = payload;
        },
        setError: (state, { payload }) => {
            state.error = payload;
        },
    },
});

const { setPosition, setError } = locationSlice.actions;

export const fetchCurrentLocation = () => (dispatch) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                dispatch(
                    setPosition({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    })
                );
            },
            (error) => {
                dispatch(setError(error.message));
            }
        );
    } else {
        dispatch(setError("Geolocation is not supported by this browser."));
    }
};

export default locationSlice.reducer;