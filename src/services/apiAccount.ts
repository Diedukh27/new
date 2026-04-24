import {createApi} from "@reduxjs/toolkit/query/react";
import {createBaseQuery} from "../util/createBaseQuery.ts";
import type {ICreatePost} from "../types/ICreatePost.ts";
import type {IPost} from "../types/IPost.ts";
import type {IRegisterResponse} from "../types/account/IRegisterResponce.ts";
import type {IRegister} from "../types/account/IRegister.ts";
// import type {IUser} from "../types/IUser.ts";

export const apiAccount = createApi({
    reducerPath: 'account',
    baseQuery: createBaseQuery("account"),
    endpoints: (builder) => ({
        register: builder.mutation<IRegisterResponse, IRegister>({
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