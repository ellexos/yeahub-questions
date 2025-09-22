import s from './baseButton.module.css'

interface ButtonProps {
    children: string,
    icon?: string,
    primary?: boolean,
    active?: boolean,
    onClick?: () => void
}

export const BaseButton = ({children, icon, primary, onClick, active = false}: ButtonProps) => {
    return (
        <button
            className={`
            ${s.default} 
            ${primary ? s.primary : ''} 
            ${active ? s.active : ''}
            `}
            onClick={onClick}
        >
            {
                icon && <img src={icon} alt="Иконка кнопки" className={s.icon}/>
            }
            {children}
        </button>
    );
};
