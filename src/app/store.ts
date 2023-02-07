import {AnyAction, combineReducers, configureStore, ThunkDispatch} from "@reduxjs/toolkit";
import thunkMiddleware from 'redux-thunk'
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {usersReducer} from "../users/usersReducer";

export const rootReducer = combineReducers({
    users: usersReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
})

export type RootStateType = ReturnType<typeof rootReducer>

export type AppThunk = ThunkDispatch<RootStateType, unknown, AnyAction>

// export type ActionsType =
//     | UsersActionsType

export const useAppDispatch = () => useDispatch<AppThunk>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
// @ts-ignore
window.store = store

