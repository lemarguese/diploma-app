import './SuggestPost.css'
import {FC} from "react";

interface IProps {
    image: string,
    title: string,
    content: string,
}

const SuggestPost: FC<IProps> = ({image, title, content}) => {
    return <div className="article__suggested__item">
        <img className="article__suggested__item__image" src={image}/>
        <h4 className="article__suggested__item__title">{title}</h4>
        <p className="article__suggested__item__content">{content}</p>
    </div>
}

export default SuggestPost;
