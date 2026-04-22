import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../util/createBaseQuery.ts";
import type {IPost} from "../types/IPost.ts";
import type {ICreatePost} from "../types/ICreatePost.ts";

export const apiPosts = createApi({
    reducerPath: 'post',
    baseQuery: createBaseQuery("post"),
    endpoints: (builder) => ({
        createPost: builder.mutation<IPost, ICreatePost>({
            query: (body) => ({
                url: "",
                method: "POST",
                body
            })
        })
    })
});

export const {
    useCreatePostMutation
}  = apiPosts;