import "./comments.scss"
import pic1 from "../../images/pic1.jpg"
import pic2 from "../../images/pic2.jpg"
import pic3 from "../../images/pic3.jpg"
import pic4 from "../../images/pic4.jpg"
import Post from "../post/post.jsx"
import { useSelector } from "react-redux"

const Comments = () => {

    const currentUser = useSelector(state=> state.authUser.currentUser)
    const comments = [
        {id: 1,
            name: "Ali Shab",
            userId: 1,
            profilePic: pic2,
            desc: `Lorem, ipsum dolor sit amet consectetur adipisicing! AAelit. Vero ea eos vel!`,
            date: 'last night'},
            
            {id: 2,
            name: "Ali Shab",
            userId: 1,
            profilePic: pic1,
            desc: `Lorem, ipsum dolorip elit. Vero ea eos vel!`,
            date:'today'},
    
    ]
    
    
    return<div className="container">
        <div className="write">
            <img src={currentUser.profilePic} />
            <input type="text" placeholder="write a comment" />
            <button>send</button>
        </div>
        {
            comments.map(item => (
                <div className="comment" key={item.id}>
                    <img src={item.profilePic} alt="" />
                    <div className="text">
                        <p>{item.name}</p>
                        <span>{item.desc}</span>        
                    </div>
                    <small>{item.date}</small>
                </div>
            ))
        }
    </div>
    }


    export default Comments