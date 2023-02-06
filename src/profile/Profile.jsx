import React from "react";
import "./profile.scss"
import FacebookTwoToneIcon from'@mui/icons-material/FacebookTwoTone';
import LinkdeInIcon from'@mui/icons-material/LinkedIn';
import InstagramIcon from'@mui/icons-material/Instagram';
import PinterestIcon from'@mui/icons-material/FacebookTwoTone';
import TwitterIcon from'@mui/icons-material/Twitter';
import PlaceIcon from'@mui/icons-material/Place';
import LanguageIcon from'@mui/icons-material/Language';
import EmailOutlinedIcon from'@mui/icons-material/EmailOutlined';
import MoreVertIcon from'@mui/icons-material/MoreVert';
import dota from '../images/dota.jpg'
import blackSakuna from '../images/blackSakuna.jpg'
import Posts from '../components/posts/Posts'


const Profile = () => {
   
    return( 
        <div className="profile">
            <div className="images">
                <img className="cover" src={dota} alt="" />
                <img className="profile" src={blackSakuna} alt="" />
            </div>

            <div className="profile-container">
                <div className="userInfo">
                    <div className="left">
                        <a href=""><FacebookTwoToneIcon /></a>
                        <a href=""><TwitterIcon /></a>
                        <a href=""><PinterestIcon /></a>
                    </div>
                    <div className="center">
                        <span>Spike</span>
                        <div className="container">
                            <div className="info">
                                <div className="item">
                                    <PlaceIcon fontSize="small"/>
                                    <span>USA</span>
                                </div>
                                <div className="item">
                                    <LanguageIcon fontSize="small"/>
                                    <span>@t.me</span>
                                </div>
                            </div>

                        </div>
                                <button>Follow </button>
                    </div>
                    <div className="rigth">
                        <EmailOutlinedIcon/>
                        <MoreVertIcon/>
                    </div>
                </div>
            <Posts/>
            </div>
        </div>
    )

}
export default Profile