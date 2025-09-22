import baseApi from "@/shared/api/baseApi.ts";

const skillApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSkills: builder.query({
            query: ({page = 1, limit = 10, specializations }
            ) =>({
                url: 'skills',
                params: {
                    page,
                    limit,
                    ...(specializations ? {specializations} : [])
                },
            })
        })
    })
})

export const {useGetSkillsQuery} = skillApi
export default skillApi