import baseApi from "@/shared/api/baseApi.ts";

const specializationApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSpecializations: builder.query({
            query: ({page = 1, limit = 10}
            ) => ({
                url: '/specializations',
                params: {page, limit},
            })
        }),
        getSpecializationById: builder.query({
            query: (id) =>  `/specializations/${id}`
        })

    })
})

export const {useGetSpecializationsQuery, useGetSpecializationByIdQuery} = specializationApi
export default specializationApi