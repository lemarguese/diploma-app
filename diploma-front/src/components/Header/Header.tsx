import './Header.css'
import {useNavigate} from "react-router";
import {useAppSelector} from "../../hooks/useAppSelector";
import {useState} from "react";

const Header = () => {

    const {user} = useAppSelector(state => state.user)
    const router = useNavigate();
    const [showSidebar, setShowSidebar] = useState<boolean>(false)

    return <>
        <div>
            <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
                <p className="sidebar__route" onClick={() => router('/topic/parent')}>Для Родителей</p>
                <p className="sidebar__route" onClick={() => router('/topic/youngster')}>Для Подростков</p>
                <p className="sidebar__route" onClick={() => router('/help')}>Помощь</p>
            </div>
            <div className={`sidebar__background ${showSidebar ? 'visible' : ''}`}
                 onClick={() => setShowSidebar(prev => !prev)}/>
        </div>
        <div className={`header ${showSidebar ? 'blur' : ''}`}>
            <div className="header__logo">
                <img src="/shared/icons/burger_icon.svg" className="header__burger__icon"
                     onClick={() => setShowSidebar(prev => !prev)}/>
                <p className="header__logo__text" onClick={() => router('/')}>SafeZone</p>
            </div>
            <div className="header__routes">
                <p className="header__route__text" onClick={() => router('/topic/parent')}>Для Родителей</p>
                <p className="header__route__text" onClick={() => router('/topic/youngster')}>Для Подростков</p>
                <p className="header__route__text" onClick={() => router('/help')}>Помощь</p>
                <input type="text" placeholder="Поиск" className="header__search"/>
                <img src="/shared/icons/search_icon.svg" className="header__mobile__search"/>
                {user?.fullName
                    ? <div className="header__user__avatar">
                        <p>{user?.fullName[0]}</p>
                    </div>
                    : <button className="header__login__btn" onClick={() => router('/login')}>Войти</button>}
            </div>
        </div>
    </>
}

export default Header;
