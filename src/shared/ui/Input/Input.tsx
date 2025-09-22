import s from './Input.module.css'
import searchIcon from '@/shared/assets/images/SearchIcon.svg'

interface InputProps{
    placeholder: string,
    value: string,
    onChange: (search: string) => void
}

export const Input = ({placeholder, value, onChange}:InputProps) => {
    return (
        <div className={s.root}>
            <img src={searchIcon} alt="Иконка поиска" className={s.img}/>
            <input
                className={s.input}
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </div>
    );
};
