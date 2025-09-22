import {useNavigate, useParams} from "react-router-dom";
import {QuestionDetailsCard} from "@/widgets/question/QuestionDetailsCard";
import {QuestionDetailsSidebar} from "@/widgets/question/QuestionDetailsSidebar";
import {useGetQuestionByIdQuery} from "@entities/question/api/questionsApi";
import caretLeft from '@/shared/assets/images/CaretLeft.svg'
import s from './QuestionDetailsPage.module.css'


export const QuestionDetailsPage = () => {
    const {id} = useParams()
    const {data: question, isLoading, isError } = useGetQuestionByIdQuery(id)
    const navigate = useNavigate();

    if(isLoading) return <div>Загрузка...</div>
    if(isError) return <div>Ошибка</div>
    if(!question) return <div>Нет данных</div>


    return (
        <>
            <button onClick={() => navigate(-1)} className={s.navigateBtn}>
                <img src={caretLeft} alt='Назад к списку вопросов'/>
                Назад
            </button>

            <div className={s.root}>
                <div className={s.main}>
                    <QuestionDetailsCard {...question}/>
                </div>
                <div className={s.sidebar}>
                    <QuestionDetailsSidebar {...question}></QuestionDetailsSidebar>
                </div>
            </div>
        </>
    );
};
