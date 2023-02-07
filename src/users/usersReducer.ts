import {createAsyncThunk, createSlice, Dispatch} from "@reduxjs/toolkit";
import {usersApi} from "../api/usersApi";
import {RootStateType} from "../app/store";

const initialState = {
    users: [{
        id: '',
        name: '',
        age: '',
        location: '',
    }] as UserType[],
}

const slice = createSlice({
    name: 'usersReducer',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchUsersTC.fulfilled, (state, action) => {
            if (action.payload) {
                state.users = action.payload
            }
        })
        builder.addCase(createNewUserTC.fulfilled, (state, action) => {
            if (action.payload) {
                state.users.unshift(action.payload.data)
            }
        })
    },
})

export const usersReducer = slice.reducer
//export const {} = slice.actions

export const fetchUsersTC = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        try {
            const res = await usersApi.getUsers()
            return res.data
        } catch {
            alert('error')
        }
    }
)
export const createNewUserTC = createAsyncThunk<{ data: CreateUserResponseType },
    CreateUserPayloadType,
    AsyncThunkConfig>(
    'users/createNewUser',
    async (payload, thunkAPI) => {
        try {
            const res = await usersApi.createUser(payload)
            return {data: res.data}
        } catch {
            alert('error')
            return thunkAPI.rejectWithValue({
                errors: ['some error occurred']
            })

        }
    }
)
//export type UsersActionsType = ReturnType<typeof setDataAC> | ReturnType<typeof deleteUserDataAC>

export const usersSelector = (state: RootStateType) => state.users.users

export type UserType = {
    id: string
    name: string
    location: string
    age: string
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
export type CreateUserResponseType = {
    id: string
    name: string
    age: string
    location: string
}
export type CreateUserPayloadType = {
    name: string
    age: string
    location: string
}