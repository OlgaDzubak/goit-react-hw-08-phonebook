import {createSlice} from "@reduxjs/toolkit";
import {register, logIn, logOut, refreshUser} from "./operations";
import { toast } from 'react-hot-toast';


// Слайс Авторизації ==============================================================================

    const initialState = {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isRefreshing: false,
    };

    const authSlice = createSlice({
        name: "auth",
        initialState,
        extraReducers:{
            [register.fulfilled](state, action){
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
                toast.success("Registration successful!");
            },
            [register.rejected](state, action){
                if (action.payload === "ERR_BAD_REQUEST")  {
                    toast.error("Registration failed! The login is already taken!");
                } else {
                    toast.error("Registration failed! Server error!");
                }
            },
            
            [logIn.fulfilled](state, action){
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLoggedIn = true;
            },
            [logIn.rejected](state, action){
                if (action.payload === "ERR_BAD_REQUEST")  {
                    toast.error("Authorization failed! Wrong login or password!");
                }
            },

            [logOut.fulfilled](state, action){
                state.user = {name: null, email: null};
                state.token = null;
                state.isLoggedIn = false;
            },
            [logOut.rejected](state, action){
                if (action.payload === "ERR_UNAUTHORIZED")  {
                    toast.error("Logout failed! Missing header with authorization token!");
                } else {
                    toast.error("Logout failed! Server error!");
                }
            },

            [refreshUser.pending](state) {
                state.isRefreshing = true;
            },
            [refreshUser.fulfilled](state, action) {
                state.user = action.payload;
                state.isLoggedIn = true;
                state.isRefreshing = false;
            },
            [refreshUser.rejected](state) {
                state.isRefreshing = false;
            },
        }
    });

    export const authReducer = authSlice.reducer;

// =================================================================================================