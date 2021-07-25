import { createAction, createAsyncThunk, createReducer } from '@reduxjs/toolkit'
import { UserDTO } from "../../shared/DTO/UserDTO";
import ApiProvider from '../api/ApiProvider';

export enum UserStatus {
    LOGGED_IN,
    LOGGING_IN,
    LOGGED_OFF
}

export interface UserReducer {
    userStatus: UserStatus,
    user: UserDTO,
    loginError: string
}

export const Login = createAsyncThunk('UserReducer/Login', async (user: { email: string, password: string }, thunkApi) => {
    return ApiProvider.UserApi.login(user.email, user.password);
});

const initialState = {
    userStatus: UserStatus.LOGGED_OFF
} as UserReducer;

export default createReducer(initialState, (builder) => {
    builder
        .addCase(Login.fulfilled, (state, action) => {
            state.userStatus = UserStatus.LOGGED_IN;
            state.user = action.payload;
        })
        .addCase(Login.pending, (state, action) => {
            state.userStatus = UserStatus.LOGGING_IN;
        })
        .addCase(Login.rejected, (state, action) => {
            state.userStatus = UserStatus.LOGGED_OFF;
            state.loginError = action.error.message || "";
        })
})