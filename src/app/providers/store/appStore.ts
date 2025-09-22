import {configureStore} from "@reduxjs/toolkit";
import baseApi from "@shared/api/baseApi.ts";
import filtersReducer from '@/features/question/Filter/model/FilterSlice'

const store = configureStore({
    reducer: {
        filters: filtersReducer,
        [baseApi.reducerPath]: baseApi.reducer,

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware)
})

export type RootState  = ReturnType<typeof store.getState>;
export default store