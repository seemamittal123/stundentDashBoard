import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  student: null,
  isLogged: false,
};
const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setLogin: (state) => {
      state.isLogged = true;
    },
    setStudent: (state, action) => {
      state.student = action.payload;
    },
  },
});

export const { setLogin, setStudent } = userSlice.actions;
export default userSlice.reducer;
