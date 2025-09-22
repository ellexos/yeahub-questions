import {useState} from "react";
import type { ReactNode } from 'react';
import chevronDown from '@/shared/assets/images/Chevrone_Down.svg'
import chevronUp from '@/shared/assets/images/Chevrone_Up.svg'
import s from './Accordion.module.css'

interface AccordionProps {
    title: string,
    children?: ReactNode
}

export const Accordion = ({title, children}: AccordionProps) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleOpen = () => setIsOpen(prev => !prev)

    return (
        <div className={s.accordion}>
            <div className={s.accordionHeader} onClick={handleOpen}>
                <span className={s.accordionTitle}>{title}</span>
                {
                    isOpen
                        ? <img src={chevronUp} alt="Свернуть аккордеон"/>
                        : <img src={chevronDown} alt="Раскрыть аккордеон"/>
                }

            </div>

            {isOpen && (
                <div className={s.accordionContent}>
                    {children}
                </div>
            )}
        </div>
    );
};
