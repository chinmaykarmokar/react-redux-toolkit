import { mainApiSlice } from "../mainApiSlice";

export const getUsersSlice = mainApiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => "users",
        }),
        getSingleUser: builder.query({
            query: (id) => `users/${id}`
        })
    })
})

export const { useGetUsersQuery, useGetSingleUserQuery } = getUsersSlice;