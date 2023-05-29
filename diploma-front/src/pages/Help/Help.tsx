import './Help.css'

const Help = () => {
    return <div className="help">
        <h2 className="help__title">
            Соединяем тебя с помощью в твоем городе!
        </h2>
        <div className="help__selectors">
            <div className="help__select__block">
                <label htmlFor="city" className="help__select__label">Выберите свой город:</label>
                <select name="city" id="city" className="help__select">
                    <option value="" selected>Aktobe</option>
                    <option value="">Almaty</option>
                </select>
            </div>
            <div className="help__select__block">
                <label htmlFor="direction" className="help__select__label">Выберите направление:</label>
                <select name="direction" id="direction" className="help__select">
                    <option value="" selected>Top</option>
                    <option value="">Bottom</option>
                </select>
            </div>
        </div>
        <p className="help__result__text">Результаты в городе Город по направлению Направление(например психологи и
            тд)</p>
        <div className="help__result__list">
            <div className="help__result__card">
                <h3 className="help__result__card__location">Название клиники, центра или специалиста</h3>
                <a href="tel:+77007777777" className="help__result__card__phone">8-700-777-77-77</a>
                <p className="help__result__card__description">Описание: чем конкретно этот психолог или клиника
                    пользователю поможет</p>
                <ul className="help__result__bullet">
                    <li className="help__result__media">Адрес - ссылка на их сайт или соц сеть</li>
                </ul>
            </div>
        </div>
    </div>
}

export default Help;
