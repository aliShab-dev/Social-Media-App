import "./story.scss"
import pic1 from "../../images/pic1.jpg"
import pic2 from "../../images/pic2.jpg"
import pic3 from "../../images/pic3.jpg"
import pic4 from "../../images/pic4.jpg"
import { useSelector } from "react-redux"


const Story = () => {

    const currentUser =useSelector(state=>state.authUser.currentUser)
    //temprory
    const stories = [
        {id:1, name: "aliSh", img:pic4 },
        {id:2, name: "Jotaro", img:pic1 },
        {id:3, name: "ZhiaHG", img:pic2 },
        {id:4, name: "mmd", img:pic3 },
    ]

    return(
        <div className="stories">
            <div className="story" key={currentUser.id}>
                    <img src={currentUser.profilePic} alt="" />
                    <span>{currentUser.name}</span>
                    <button>+</button>
                </div>
            {stories.map(story=>(
                <div className="story" key={story.id}>
                    <img src={story.img} alt="" />
                    <span>{story.name}</span>
                </div>
            ))}
        </div>

    )
}

export default Story