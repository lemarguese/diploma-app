import './Header.css'

const Header = () => {

    // TODO REDUX User get
    return <div className="header">
        <div className="header__logo">
            <img src="/shared/icons/burger_icon.svg" className="header__burger__icon"/>
            <p className="header__logo__text">SafeZone</p>
        </div>
        <div className="header__routes">
            <p className="header__route__text">Для Родителей</p>
            <p className="header__route__text">Для Подростков</p>
            <p className="header__route__text">Помощь</p>
            <input type="text" placeholder="Поиск" className="header__search"/>
            <img src="/shared/icons/search_icon.svg" className="header__mobile__search"/>
            <button className="header__login__btn">Войти</button>
        </div>
    </div>
}

export default Header;
