import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const userInfoSlice = createSlice({
    name: "userInfo",
    initialState: { 
        identity: "",
        isRoomHost: false,
        connectOnlyWithAudio: false,
     },
    reducers: {
        setIsRoomHost(state, action: PayloadAction<boolean>) { 
          state.isRoomHost = action.payload
        },
        setConnectOnlyWithAudio(state, action:PayloadAction<boolean>) {
            state.connectOnlyWithAudio = action.payload
        },
    },
});

export const { setIsRoomHost, setConnectOnlyWithAudio } = userInfoSlice.actions;
export default userInfoSlice.reducer;