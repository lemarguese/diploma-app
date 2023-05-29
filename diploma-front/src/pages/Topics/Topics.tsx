import Accordion from "../../components/Accordion/Accordion";
import {useParams} from "react-router";
import './Topics.css'
import TopicParent from '../../shared/images/topic_parent.jpg'
import TopicYoung from '../../shared/images/topic_youngster.jpg'
import {useMemo} from "react";

const Topics = () => {
    const {role} = useParams()

    const {title, description, image} = useMemo(
        () => (
            {
                title: role === 'parent' ? 'Для родителей' : 'Для подростков',
                description: role === 'parent'
                    ? 'Советы по детскому здоровью, поведению и росту – от рождения до подросткового возраста.'
                    : 'Поддержка и советы по вопросам здоровья, эмоций и жизни',
                image: role === 'parent' ? TopicParent : TopicYoung
            }
        ),
        [role])

    return <div className="topics">
        <div className="topics__board">
            <img className="topics__board__image" src={image}/>
            <div className="topics__board__info">
                <h3 className="topics__board__role">{title}</h3>
                <p className="topics__board__content">{description}</p>
            </div>
        </div>
        <div className="topics__advise">
            <h4 className="topics__advise__title">Все темы:</h4>
            <div className="topics__accordions">
                <Accordion title="Психология ребенка"
                           description="Родители играют важную роль в психологическом развитии ребенка. Они являются первичными опекунами, воспитателями и образцами для подражания.(описание категории)"/>
                <Accordion title="Психология ребенка"
                           description="Родители играют важную роль в психологическом развитии ребенка. Они являются первичными опекунами, воспитателями и образцами для подражания.(описание категории)"/>
                <Accordion title="Психология ребенка"
                           description="Родители играют важную роль в психологическом развитии ребенка. Они являются первичными опекунами, воспитателями и образцами для подражания.(описание категории)"/>
            </div>
        </div>
    </div>
}

export default Topics;
