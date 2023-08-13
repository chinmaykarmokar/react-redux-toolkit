import { mainApiSlice } from "../mainApiSlice";

export const getUsersSlice = mainApiSlice.injectEndpoints({
    tagTypes: ["Users"],
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => "users",
            providesTags: ["Users"],
            transformResponse: (response, meta, arg) => response
        }),
        getSingleUser: builder.query({
            query: (id) => `users/${id}`
        }),
        addUser: builder.mutation({
            query: user => ({
                url: "/users",
                method: "POST",
                body: user
            }),
            invalidatesTags: ["Users"]
        }),
        updateUser: builder.mutation({
            query: ({id, ...rest}) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: rest
            }),
            invalidatesTags: ["Users"]
        }),
        deleteUser: builder.mutation({
            query: ({id}) => ({
                url: `/users/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Users"]
        })
    })
})

export const { 
    useGetUsersQuery,
    useGetSingleUserQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
 } = getUsersSlice;