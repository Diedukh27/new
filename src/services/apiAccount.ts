import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../util/createBaseQuery.ts";
import type {ICreatePost} from "../types/ICreatePost.ts";
import type {IPost} from "../types/IPost.ts";
// import type {IUser} from "../types/IUser.ts";

export const apiAccount = createApi({
    reducerPath: 'account',
    baseQuery: createBaseQuery("account"),
    endpoints: (builder) => ({
        // getUsers: builder.query<IUser[], void>({
        //     query: () => '',
        // }),
        register: builder.mutation<IPost, ICreatePost>({
            query: (body)  => ({
                url: "",
                body,
                method: "POST"
            })
        })
    })
});

export const {
    useRegisterMutation
}  = apiAccount;