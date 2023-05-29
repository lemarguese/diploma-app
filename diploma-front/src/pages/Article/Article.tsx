import './Article.css'
import BackIcon from '../../shared/icons/left_icon.svg'
import ArticleImg from '../../shared/images/topic_youngster.jpg'
import Comment from "../../components/Comment/Comment";
import {useAppSelector} from "../../hooks/useAppSelector";
import SuggestPost from "../../components/SuggestPost/SuggestPost";

const Article = () => {

    const user = useAppSelector(state => state.user)

    return <div className="article">
        <div className="article__title__block">
            <img src={BackIcon} alt="" className="article__back__icon"/>
            <h4 className="article__title__text">Об основах тела</h4>
        </div>
        <div className="article__body">
            <div className="article__main">
                <div className="article__label">
                    <div className="article__statistics">
                        <div className="article__stat__item">
                            <img src="/shared/icons/like_icon.svg" alt="" className="article__stat__like"/>
                            <p className="article__stat__text">0</p>
                        </div>
                        <div className="article__stat__item">
                            <img src="/shared/icons/comment_icon.svg" alt="" className="article__stat__comment"/>
                            <p className="article__stat__text">0</p>
                        </div>
                        <div className="article__stat__item">
                            <img src="/shared/icons/eye_icon.svg" alt="" className="article__stat__visited"/>
                            <p className="article__stat__text">0</p>
                        </div>
                    </div>
                    <img src={ArticleImg} alt="" className="article__label__image"/>
                </div>
                <div className="article__information">
                    <h4 className="article__information__title">Что такое иммунная система?</h4>
                    <br/>
                    <p className="article__information__content">Иммунная система – это защита организма от инфекций.
                        Иммунная система (ih-MYOON) атакует микробы и
                        помогает нам оставаться здоровыми.</p>
                    <br/>
                    <h4 className="article__information__title">Каковы части иммунной системы?</h4>
                    <br/>
                    <p className="article__information__content">
                        Многие клетки и органы работают вместе, чтобы защитить тело. Лейкоциты, также называемые
                        лейкоцитами
                        (LOO-kuh-sytes), играют важную роль в иммунной системе.<br/><br/>
                        Некоторые типы лейкоцитов, называемые фагоцитами (FAH-guh-sytes), пережевывают вторгшиеся
                        организмы.
                        Другие, называемые лимфоцитами (LIM-fuh-sytes), помогают организму запоминать захватчиков и
                        уничтожать их.<br/><br/>
                        Одним из видов фагоцитов являются нейтрофилы (NOO-truh-fil), которые борются с бактериями. Когда
                        у
                        кого-то может быть бактериальная инфекция, врачи могут назначить анализ крови, чтобы увидеть, не
                        вызвала ли она в организме большое количество нейтрофилов. Другие типы фагоцитов выполняют свою
                        работу, чтобы убедиться, что организм реагирует на захватчиков.
                    </p>
                </div>
            </div>
            <div className="article__suggested__posts">
                <h4 className="article__suggested__title">Возможно, вам будет интересно:</h4>
                <div className="article__suggested__list">
                    <SuggestPost image={ArticleImg} title="Название статьи" content="Описание: 5-10 cлов" />
                    <SuggestPost image={ArticleImg} title="Название статьи" content="Описание: 5-10 cлов" />
                    <SuggestPost image={ArticleImg} title="Название статьи" content="Описание: 5-10 cлов" />
                </div>
            </div>
        </div>
        <div className="article__comments">
            <h4 className="article__comment__title">Комментарии</h4>
            <div className="article__comment__list">
                <Comment isUser author="John" text="Impressive!" time="1 day ago" upvotes={10}/>
                <Comment author="Derek" text="That is good!" time="2 day ago" upvotes={20}/>
            </div>
            <div className="article__comment__field">
                <img src={ArticleImg} alt="" className="article__comment__avatar"/>
                <input type="text" placeholder="Написать комментарий" className="article__comment__input"/>
                <button className="article__comment__submit">Отправить</button>
            </div>
        </div>
    </div>
}

export default Article;
