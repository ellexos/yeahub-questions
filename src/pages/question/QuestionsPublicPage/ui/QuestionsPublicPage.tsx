import {QuestionFiltersPanel} from "@widgets/question/QuestionFiltersPanel";
import {QuestionsFeed} from "@widgets/question/QuestionsFeed";
import s from './QuestionsPublicPage.module.css'


export const QuestionsPublicPage = () => {
    return (
        <div className={s.root}>
            <section className={s.main}>
                <QuestionsFeed/>
            </section>
            <section className={s.sidebar}>
                <QuestionFiltersPanel/>
            </section>
        </div>
    );
};
