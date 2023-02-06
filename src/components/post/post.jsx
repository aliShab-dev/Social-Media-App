import './post.scss'
import MoreHorizIcon  from '@mui/icons-material/MoreHoriz'
import ShareOutlinedIcon  from '@mui/icons-material/ShareOutlined'
import TextsmsOutlinedIcon  from '@mui/icons-material/TextsmsOutlined'
import { Link } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Comments from "../comments/Comments"
import { useState } from 'react';

const Post = ({post}) => {
    const [commentOpen, setCommentOpen] = useState(false)
    const liked = false
    

    return(
        <div className='post'>
            <div className="container">

                <div className="user">

                    <div className="left">
                        <img src={post.profilePic} />
                        <div className='detail'>
                        <Link to={`./profile/${post.userId}`} style={{textDecoration:'none', color:"inherit"}}>
                            <span>{post.name}</span>
                        </Link>
                            <small>recently</small>
                        </div>

                    </div>
                    <div className="right">
                        <MoreHorizIcon/>
                    </div>
                </div>
                <div className="content">
                    <p>{post.desc}</p>
                    <img src={post.img} alt="" />
                </div>
                <div className="footer">
                    <div className="item">
                        {liked ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                        12 Likes
                    </div>
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <ShareOutlinedIcon/>
                        8 Comments
                    </div>
                    <div className="item">
                        <TextsmsOutlinedIcon/>
                        Share
                    </div>
                </div>
            {commentOpen && <Comments/>}
            </div>
        </div>
    )
}

export default Post