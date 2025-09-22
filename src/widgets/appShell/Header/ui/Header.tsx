import {Container} from "@shared/ui/Container";
import {MainNav} from "@widgets/appShell/Header/ui/MainNav";
import {AuthLinks} from "@widgets/appShell/Header/ui/AuthLinks";
import s from './Header.module.css'



export const Header = () => {
    return (
        <header className={s.header}>
            <Container>
                <div className={s.row}>
                    <MainNav/>
                    <AuthLinks/>
                </div>
            </Container>
        </header>
    );
};