import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import FavouritePosts from "../pages/FavouritePosts/FavouritePosts";

const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />}/>
            <Route path="/" element={<Home />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/favourite" element={<FavouritePosts />}/>
        </Routes>
    </BrowserRouter>
}

export default Router;
