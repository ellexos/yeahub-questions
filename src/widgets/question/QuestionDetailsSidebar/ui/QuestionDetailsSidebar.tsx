import type {IQuestion} from "@entities/question";
import {Badge} from "@shared/ui/Badge";
import s from './QuestionDetailsSidebar.module.css';
import SidebarSection from "@shared/ui/SidebarSection/SidebarSection.tsx";
import {useNavigate} from "react-router-dom";


export const QuestionDetailsSidebar = ({rate, complexity, keywords, questionSkills} : IQuestion) => {
    const navigate = useNavigate()
    return (
        <div className={s.root}>
            <div className={s.sectionRoot}>
                <p className={s.sectionTitle}>Уровень: </p>
                <div className={s.sectionItems}>
                    <Badge label="Рейтинг: " value={rate}/>
                    <Badge label="Сложность: " value={complexity}/>
                </div>
            </div>

            <SidebarSection title="Навыки:" items={questionSkills} onToggle={() => navigate(-1)}/>

            <div className={s.sectionRoot}>
                <p className={s.sectionTitle}>Ключевые слова: </p>
                <div className={s.sectionItems}>
                    {
                        keywords.map((word, i) => (
                            <a href='' key={i} className={s.keywordItem}>#{word}</a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
