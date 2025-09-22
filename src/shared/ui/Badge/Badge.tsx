import type {ReactNode} from "react";
import s from './badge.module.css';

interface BadgeProps {
    label: string;
    value: ReactNode
}

export const Badge = ({label, value}: BadgeProps) => {
    return (
        <div className={s.badge}>
            <span>{label}</span>
            <span className={s.badgeChildren}>{value}</span>
        </div>
    );
};