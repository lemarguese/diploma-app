import './Post.css';
import PostImage from "../../shared/images/home_background.jpg";
import {FC} from "react";

interface IProps {
    title: string,
    description: string,
    likes: number,
    comments: string[]
}

const Post: FC<IProps> = ({title, description, likes, comments= []}) => {
    return <div className="post__item">
        <div className="post__item__image__block">
            <img src={PostImage} alt="" className="post__item__image"/>
        </div>
        <div className="post__item__info">
            <h2 className="post__item__info__title">{title}</h2>
            <p className="post__item__info__content">{description}</p>
            <div className="post__item__info__footer">
                <div className="post__item__reactions">
                    <div className="post__item__reaction">
                        <img className="post__item__reaction__icon" src="/shared/icons/like_icon.svg"/>
                        <p className="post__item__reaction__count">{likes}</p>
                    </div>
                    <div className="post__item__reaction">
                        <img className="post__item__reaction__icon" src="/shared/icons/comment_icon.svg"/>
                        <p className="post__item__reaction__count">{comments.length}</p>
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
