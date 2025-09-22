import {type ReactNode} from "react";
import s from './container.module.css'

interface ContainerProps {
    children:ReactNode
}

export const Container = ({children}: ContainerProps) => {
    return (
        <div className={s.container}>{children}</div>
    );
};
