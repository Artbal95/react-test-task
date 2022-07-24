import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {},
    // middleware: getDefaultMiddleware => getDefaultMiddleware({thunk: {extraArgument: services}})
  })



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store