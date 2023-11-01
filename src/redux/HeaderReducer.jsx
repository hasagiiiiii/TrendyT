import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "HeaderReducer",
  initialState: {
    URL_SideBar: "",
  },
  reducers: {
    addURLSideBar: (state, action) => {
      state.URL_SideBar = action.payload;
    },
  },
});
