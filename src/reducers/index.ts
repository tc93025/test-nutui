import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userName: string;
  userId: string;
  userToken: string;
}

const initialState: UserState = {
  userName: "",
  userId: "",
  userToken: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    loginOut: (state) => {
      state.userName = "";
      state.userId = "";
      state.userToken = "";
    },
  },
});

export const { login, loginOut } = userSlice.actions;
export default userSlice.reducer;
