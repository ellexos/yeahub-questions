import {Link} from "react-router-dom";
import s from './AuthLinks.module.css'

export const AuthLinks = () => {
    return (
        <div>
            <Link to='/auth/login' className={s.login}>Вход</Link>
            <Link to='/auth/register' className={s.register}>Регистрация</Link>
        </div>
    );
};