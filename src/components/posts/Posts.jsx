import "./post.scss"
import pic1 from "../../images/pic1.jpg"
import pic2 from "../../images/pic2.jpg"
import pic3 from "../../images/pic3.jpg"
import pic4 from "../../images/pic4.jpg"
import pic5 from "../../images/pic5.jpg"
import pic6 from "../../images/pic6.jpg"
import Post from "../post/post.jsx"

const Posts = () => {

    const posts = [
        {id: 1,
        name: "Mirza",
        userId: 1,
        profilePic: pic3,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing! AAelit. Vero ea eos vel!`,
        img:pic2},
        
        {id: 2,
        name: "Jhon Doe",
        userId: 1,
        profilePic: pic1,
        desc: `Lorem, ipsum dolorip elit. Vero ea eos vel!`,
        img:pic6},

        {id: 3,
        name: "Ali mds",
        userId: 1,
        profilePic: pic4,
        desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero ea eos vel!`,
        img:pic5},
    ]
    

    return<div className="posts">
            {posts.map(post =>(
                <Post post={post} key={post.id}/>
            ))
            }
        </div>
};

export default Posts