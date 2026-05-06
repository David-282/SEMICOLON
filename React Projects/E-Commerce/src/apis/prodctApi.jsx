

import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/query";

const baseUrl = import.meta.env.VITE_APP_PRODUCTS_URL;


export const productApi = createApi({
    reducerPath: "/product",
    basePath: fetchBaseQuery({url:baseUrl}),
    endpoint: (builder)=> ({
        getAllProducts: builder.query({
          query:()=>("/product")
        }),
        login:builder.mutation({
            query: (body)=>({
                url:"/auth/login",
                method:"POST",
                body:body
            })
        })
    })
})

export const {useGetAllProductsQuery, useLoginMutation} = productApi
//middle wear(hardware tht is the middele)