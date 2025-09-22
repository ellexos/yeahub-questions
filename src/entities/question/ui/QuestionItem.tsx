import {Badge} from "@shared/ui/Badge";
import {NavLinkArrow} from "@shared/ui/NavLinkArrow";
import {Accordion} from "@shared/ui/Accordion";
import {RichText} from "@shared/ui/RichText";
import type {IQuestion} from "@entities/question";
import s from './QuestionItem.module.css'


export const QuestionItem = (question : IQuestion) => {
    if(!question) return null

    const {id, title, shortAnswer, rate, complexity} = question

    return (
        <Accordion title={title}>
            <div className={s.questionMeta}>
                <Badge label="Рейтинг: " value={rate}/>
                <Badge label="Сложность: " value={complexity}/>
            </div>

            <RichText rawHtml={shortAnswer || 'Нет короткого ответа'}/>

            <div className={s.questionActions}>
                <NavLinkArrow  label="Подробнее" path={`/questions/${id}`}/>
            </div>
        </Accordion>
    );
};