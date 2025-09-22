import {useState} from "react";
import s from './SidebarSection.module.css'

interface SideBarItem{
    id: number,
    title: string,
}

interface SideBarProps{
    title: string,
    items: SideBarItem[],
    activeItems?: number[],
    onToggle: (id: number) => void,
}

const  SidebarSection = ({title, items, onToggle,  activeItems = []}: SideBarProps) => {

    const [isShowAll, setShowAll] = useState(false)
    const shownItems =  isShowAll ? items : items.slice(0, 5)


    return (
        <div className={s.sectionRoot}>
            <p className={s.sectionTitle}>{title}</p>

            <div className={s.sectionItems}>
                {
                    shownItems.map((item) => (
                        <button
                            key={item.id}
                            className={`
                            ${s.default}
                            ${activeItems?.includes(item.id) ? s.active : ''}
                            `}
                            onClick={() => onToggle(item.id)}
                        >
                            {item.title}
                        </button>
                    ))
                }
            </div>

            {items.length > 5 && <div>
                {
                    isShowAll
                        ? <button className={s.btn} onClick={() => setShowAll(false)}>Скрыть</button>
                        : <button className={s.btn} onClick={() => setShowAll(true)}>Посмотреть все</button>
                }
            </div>}
        </div>
    );
};

export default SidebarSection;