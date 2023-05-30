import './PostCreate.css'
import {BaseSyntheticEvent, useCallback, useState} from "react";
import {IPostCreation} from "../../utils/types/post.types";
import {createPost} from "../../api/post/post";

const PostCreate = () => {

    const [newPost, setNewPost] = useState<IPostCreation>({title: '', description: '', photo: '', video: ''})
    const addData = (name: keyof IPostCreation) => (event: BaseSyntheticEvent) => {
        setNewPost(prev => ({...prev, [name]: event.target.value}))
    }

    const submitData = useCallback(async () => {
        try {
            await createPost(newPost)
        } catch (err) {
            console.log(err)
        }
    }, [newPost])

    return <div className="creation">
        <h4 className="creation__title">Добавить статью</h4>
        <div className="creation__list">
            <div className="creation__item">
                <label htmlFor="title" className="creation__label">Введите название статьи: <span>*</span></label>
                <textarea id="title" className="creation__input first__input"
                          placeholder="Название статьи"
                          onChange={addData('title')}/>
            </div>
            <div className="creation__item">
                <label htmlFor="description" className="creation__label">Введите описание статьи: <span>*</span></label>
                <textarea id="description" className="creation__input second__input"
                          placeholder="Описание статьи"
                          onChange={addData('description')}/>
            </div>
            <div className="creation__item">
                <label htmlFor="photo" className="creation__label">Добавьте фото:</label>
                <input id="photo" className="creation__input file__input" type="file" onChange={addData('photo')}/>
            </div>
            <div className="creation__item">
                <label htmlFor="video" className="creation__label">Добавьте видео: </label>
                <textarea id="video" className="creation__input last__input" onChange={addData('video')}/>
            </div>
        </div>
        <button className="creation__submit__btn" onClick={submitData}>Загрузить статью</button>
    </div>
}

export default PostCreate;
