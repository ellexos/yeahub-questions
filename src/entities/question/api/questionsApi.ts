import baseApi from "@/shared/api/baseApi.ts";

const questionsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getQuestions: builder.query({
            query: ({
                        page = 1,
                        limit = 10,
                        keywords,
                        specialization,
                        skills,
                        complexity,
                        rate
            }) =>({
                url: '/questions/public-questions',
                 params: {
                     page,
                     limit,
                     ...(keywords ? {keywords} : {}),
                     ...(specialization ? {specialization} : {}),
                     ...(skills && skills.length > 0 ? {skills} : {}),
                     ...(complexity && complexity.length > 0 ? {complexity} : {}),
                     ...(rate && rate.length > 0 ? {rate} : {})

                 }
            })
        }),

        getQuestionById: builder.query({
            query: (id) =>  `/questions/public-questions/${id}`
        })
    })
})

export const {useGetQuestionsQuery, useGetQuestionByIdQuery} = questionsApi
export default questionsApi