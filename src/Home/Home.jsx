import React from "react";
import Posts from "../components/posts/Posts";
import Story from "../components/stories/Stories";
import './home.scss'

const Home = () => {

    return(
        <div className="home">
            <Story />
            <Posts/>
        
        </div>
        

    )
}
export default Home