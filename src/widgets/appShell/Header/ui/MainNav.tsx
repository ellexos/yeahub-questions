import {Link} from "react-router-dom";
import {Logo} from "@shared/ui/Logo/Logo";
import s from './MainNav.module.css'


export const MainNav = () => {

    return (
        <nav className={s.navigation}>
            <Link to='/' className={s.navLogo}><Logo></Logo></Link>
            <Link to='/questions' className={s.navLink}>База вопросов</Link>
            <Link to='/training' className={s.navLink}>Тренажер</Link>
        </nav>
    );
};
