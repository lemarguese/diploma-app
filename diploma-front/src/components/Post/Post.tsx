import './Post.css';
import PostImage from "../../shared/images/home_background.jpg";

const Post = () => {
    return <div className="post__item">
        <div className="post__item__image__block">
            <img src={PostImage} alt="" className="post__item__image"/>
        </div>
        <div className="post__item__info">
            <h2 className="post__item__info__title">Об основах тела</h2>
            <p className="post__item__info__content">Вы когда-нибудь задумывались над тем, что делают все эти сложные системы организма? В этих статьях «Основы тела» объясняется, как работает каждая система, часть и процесс организма. Используйте эту медицинскую библиотеку, чтобы узнать об основах анатомии человека, о том, как все это работает и что происходит, когда что-то идет не так.</p>
            <div className="post__item__info__footer">
                <div className="post__item__reactions">
                    <div className="post__item__reaction">
                        <img className="post__item__reaction__icon" src="/shared/icons/like_icon.svg"/>
                        <p className="post__item__reaction__count">23</p>
                    </div>
                    <div className="post__item__reaction">
                        <img className="post__item__reaction__icon" src="/shared/icons/comment_icon.svg"/>
                        <p className="post__item__reaction__count">4</p>
                    </div>
                    <div className="post__item__reaction">
                        <img className="post__item__reaction__icon" src="/shared/icons/eye_icon.svg"/>
                        <p className="post__item__reaction__count">56</p>
                    </div>
                </div>
                <button className="post__item__read__btn">Прочитать</button>
            </div>
        </div>
    </div>
}

export default Post;
