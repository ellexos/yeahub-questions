import {useMemo, useState} from "react";
import {useGetQuestionsQuery} from "@entities/question/api/questionsApi.ts";
import {type IQuestion, QuestionItem} from "@entities/question";
import {Pagination} from "@/features/question/Pagination";
import s from './QuestionsFeed.module.css'
import {useSelector} from "react-redux";
import type {RootState} from "@app/providers/store/appStore.ts";
import {getComplexityValues} from "@features/question/Filter/model/constants.ts";

export const QuestionsFeed = () => {
    const [currentPage, setCurrentPage] = useState (1);
    const limit = 10;

    const {
        keywords,
        selectedSpecialization,
        selectedSkills,
        selectedComplexity,
        selectedRate
    } = useSelector((state: RootState) => state.filters)


    const complexityValues = useMemo(
        () => getComplexityValues(selectedComplexity),
        [selectedComplexity])

    const {
        data: questionsData,
        isLoading,
        isError
    } = useGetQuestionsQuery({
        page: currentPage,
        limit,
        keywords,
        specialization: selectedSpecialization,
        skills: selectedSkills,
        complexity: complexityValues,
        rate: selectedRate,
    })



    if(isLoading) return <div>Загрузка...</div>
    if(!questionsData || isError) return <div>Данные не загрузились =(</div>


    const questions = questionsData.data;
    const total = Math.ceil(questionsData.total / limit)


    const handlePageChange = (page: number) : void => {
        if(page >= 1 && page <= total){
            setCurrentPage(page)
        }
    }

    return (

        <div className={s.questionsList}>
            <h1 className={s.questionsListHeader}>Вопросы</h1>
            <ul>
                {
                    isLoading
                        ? <div>Загрузка вопросов...</div>
                        : questions && questions.map(((question: IQuestion) => (
                        <QuestionItem key={question.id} {...question}/>
                        )
                    ))
                }
            </ul>

            <Pagination
                currentPage={currentPage}
                limit={limit}
                totalPages={total}
                onPageChange={handlePageChange}
            />
        </div>
    );
};
