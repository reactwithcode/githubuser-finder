import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const githubUserApiSlice = createApi({
  reducerPath: "githubUser",
  baseQuery: fetchBaseQuery({ 
    baseUrl: "https://api.github.com", 
  }),
  tagTypes: ["githubUser"],
  endpoints: (builder) => {
    return {
      getUser: builder.query({
        query: (username) => `/users/${username}`,
        providesTags: ["githubUser"]
      }),

        getRepos: builder.query({
            query: (username) => `/users/${username}/repos`,
            providesTags: ["githubUser"]
        }),
    };
  },
});

export const { 
    useGetUserQuery, 
    useGetReposQuery 
} = githubUserApiSlice;
