import {createAsyncThunk, createSlice, Dispatch} from "@reduxjs/toolkit";
import {usersApi} from "../api/usersApi";
import {RootStateType} from "../app/store";

const initialState = {
    users: [{
        id: '',
        name: '',
        age: 0,
        location: '',
    }] as UserType[],
}

const slice = createSlice({
    name: 'usersReducer',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsersTC.fulfilled, (state, action) => {
            state.users = action.payload
        })
    },
})

export const usersReducer = slice.reducer
//export const {} = slice.actions

export const fetchUsersTC = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const res = await usersApi.getUsers()
        return res.data
    }
)
//export type UsersActionsType = ReturnType<typeof setDataAC> | ReturnType<typeof deleteUserDataAC>

export const usersSelector = (state: RootStateType) => state.users.users

export type UserType = {
    id: string
    name: string
    location: string
    age: number
}
type AsyncThunkConfig = {
    state?: unknown
    dispatch?: Dispatch
    extra?: unknown
    rejectValue?: unknown
    serializedErrorType?: unknown
    pendingMeta?: unknown
    fulfilledMeta?: unknown
    rejectedMeta?: unknown
}
