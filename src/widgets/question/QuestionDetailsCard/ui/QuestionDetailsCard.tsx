import {Card} from "@shared/ui/Card";
import type {IQuestion} from "@entities/question";
import s from './QuestionDetailsCard.module.css'

export const QuestionDetailsCard = (question: IQuestion) => {
    return (
        <div className={s.root}>
            <Card mainTitle title={question.title} description={question.description}/>
            <Card title="Краткий ответ" description={question.shortAnswer}/>
            <Card title="Развернутый ответ" description={question.longAnswer}/>
        </div>
    );
};