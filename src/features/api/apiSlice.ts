import { Post, User2 } from "@/types"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "/posts?_limit=5",
    }),

    getUsers: builder.query<User2[], void>({
      query: () => "/users",
    }),
  }),
})

export const {
  useGetPostsQuery,
  useGetUsersQuery,
} = apiSlice




// //src/features/api/apiSlice.ts
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

// export const apiSlice = createApi({
//   reducerPath: "api",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://jsonplaceholder.typicode.com",
//   }),
//   endpoints: (builder) => ({
//     getPosts: builder.query<any[], void>({
//       query: () => "/posts?_limit=5",
//     }),
//     getProfile: builder.query<any[], void>({
//     //   query: (id) => `/users/${id}`,
//       query: () => `/users`,
//     }),
//   }),
// })

// export const {
//   useGetPostsQuery,
//   useGetProfileQuery,
// } = apiSlice