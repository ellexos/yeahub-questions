import {Link} from "react-router-dom";
import arrowRight from "@/shared/assets/images/arrow-right.svg";
import s from './navLinkArrow.module.css';

interface NavLinkArrowProps {
    label: string,
    path: string,
    variant?: 'right' | 'left'
}

export const NavLinkArrow = ({label, path, variant = 'right'}: NavLinkArrowProps) => {
    return (
        <Link to={path} className={s.navLinkArrow}>
            {label}
            {variant === 'right' ? <img src={arrowRight} alt='Стрелка слева направо'/> : null}
        </Link>
    );
};