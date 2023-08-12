import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const mainApiSlice = createApi({
    reducerPath: "mainApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com"
    }),
    tagTypes: ['Users'],
    endpoints: builder => ({})
})