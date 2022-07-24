import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistConfig} from "redux-persist/es/types";
import * as  services from "../service"

import authReducer from "./reducers/auth.reducer"

const persistConfig: PersistConfig<any> = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: {extraArgument: services}, serializableCheck: false})
  })

export const persist = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch