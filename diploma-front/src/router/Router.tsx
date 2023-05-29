import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FavouritePosts from "../pages/FavouritePosts/FavouritePosts";
import Header from "../components/Header/Header";
import Topics from "../pages/Topics/Topics";
import Article from "../pages/Article/Article";
import Help from "../pages/Help/Help";
import PostCreate from "../pages/PostCreate/PostCreate";

const Router = () => {
    return <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/favourite" element={<FavouritePosts/>}/>
            <Route path="/topic/:role" element={<Topics/>}/>
            <Route path="/article/:id" element={<Article/>}/>
            <Route path="/help" element={<Help />}/>
            <Route path="/createPost" element={<PostCreate />}/>
        </Routes>
    </BrowserRouter>
}

export default Router;
