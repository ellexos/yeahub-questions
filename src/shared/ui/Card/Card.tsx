import {RichText} from "@shared/ui/RichText";
import s from './Card.module.css'

interface CardProps{
    title: string,
    description: string,
    mainTitle?: boolean,
}

export const Card = ({title, description, mainTitle}:CardProps) => {
    return (
        <div className={s.root}>
            <div className={s.cardContent}>
                <p className={`${s.cardTitle} ${mainTitle ? s.mainTitle : ''}`}>{title}</p>
                <RichText rawHtml={description} className={s.cardDescription}/>
            </div>
        </div>
    );
};
