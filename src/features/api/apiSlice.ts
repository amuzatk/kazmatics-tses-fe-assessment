import { Post, User2 } from "@/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  // Adding tag types
  tagTypes: ["Users", "Posts"],

  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts?_limit=5",

      // Attaching cache tags
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Posts" as const,
                id,
              })),
              { type: "Posts", id: "LIST" },
            ]
          : [{ type: "Posts", id: "LIST" }],
    }),

    getUsers: builder.query<User2[], void>({
      query: () => "/users",

      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "Users" as const,
                id,
              })),
              { type: "Users", id: "LIST" },
            ]
          : [{ type: "Users", id: "LIST" }],
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetUsersQuery,
} = apiSlice