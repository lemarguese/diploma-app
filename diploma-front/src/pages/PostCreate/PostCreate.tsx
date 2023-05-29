import './PostCreate.css'

const PostCreate = () => {
    return <div className="creation">
        <h4 className="creation__title">Добавить статью</h4>
        <div className="creation__list">
            <div className="creation__item">
                <label htmlFor="title" className="creation__label">Введите название статьи: <span>*</span></label>
                <textarea id="title" className="creation__input first__input" placeholder="Название статьи"/>
            </div>
            <div className="creation__item">
                <label htmlFor="description" className="creation__label">Введите описание статьи: <span>*</span></label>
                <textarea id="description" className="creation__input second__input" placeholder="Описание статьи"/>
            </div>
            <div className="creation__item">
                <label htmlFor="photo" className="creation__label">Добавьте фото:</label>
                <input id="photo" className="creation__input file__input" type="file" />
            </div>
            <div className="creation__item">
                <label htmlFor="video" className="creation__label">Добавьте видео: </label>
                <textarea id="video" className="creation__input last__input"/>
            </div>
        </div>
        <button className="creation__submit__btn">Загрузить статью</button>
    </div>
}

export default PostCreate;
