import {
    QuestionFilterByComplexity,
    QuestionFilterByRate,
    QuestionFilterBySkill,
    QuestionFilterBySpecialization,
    QuestionSearch
} from "@features/question/Filter";
import s from './QuestionFiltersPanel.module.css'

export const QuestionFiltersPanel = () => {
    return (
        <div className={s.filters}>
            <QuestionSearch/>
            <QuestionFilterBySpecialization/>
            <QuestionFilterBySkill/>
            <QuestionFilterByComplexity/>
            <QuestionFilterByRate/>
        </div>
    );
};
