import {Link} from "react-router-dom";
import {Container} from "@shared/ui/Container";
import {SocialIcon} from "@shared/ui/SocialIcon/SocialIcon";
import s from  './Footer.module.css'


export const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <h2>Yeahub</h2>
                <p>Выбери, каким будет завтра - вместе с нами!</p>
                <p>Yeahub - это полностью открытый проект, призванный объединить и улучшить IT-сферу. Наш исходный код доступен для просмотра на GitHub. Дизайн проекта тоже открыт для ознакомления в figma</p>

                <div className={s.copyright}>
                    <span>&copy; YeaHub</span>
                    <div className={s.links}>
                        <Link to='/documents'> Документы</Link>
                        <SocialIcon/>
                    </div>
                </div>
            </Container>
        </footer>
    );
};