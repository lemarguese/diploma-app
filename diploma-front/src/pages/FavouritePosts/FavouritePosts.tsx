import './FavouritePosts.css'
import Post from "../../components/Post/Post";

const FavouritePosts = () => {
    return <>
        <div className="favourite__posts">
            <h5 className="favourite__posts__title">Понравившиеся посты:</h5>
            <div className="favourite__posts__list">
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    </>
}

export default FavouritePosts;
